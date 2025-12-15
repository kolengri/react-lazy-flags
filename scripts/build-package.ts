import { $ } from "bun";
import { existsSync } from "fs";
import { readdir, readFile, writeFile } from "fs/promises";
import { join, extname, dirname } from "path";

const distDir = "./dist";
const srcDir = "./src";

// Clean dist directory
if (existsSync(distDir)) {
  await $`rm -rf ${distDir}`;
}

console.log("🔨 Compiling TypeScript to JavaScript...");

// Compile TypeScript using tsc
try {
  await $`bunx tsc --project tsconfig.build.json`.quiet();
  console.log("  ✓ TypeScript compilation complete");
} catch (error) {
  console.error("  ❌ TypeScript compilation failed");
  throw error;
}

// Fix import extensions in compiled files to use .js for ESM
console.log("🔧 Fixing import extensions for ESM...");

async function fixImportsInFile(filePath: string) {
  const content = await readFile(filePath, "utf-8");
  
  // Replace .tsx and .ts extensions in imports with .js
  // This handles both relative and dynamic imports
  const fixed = content
    .replace(/from\s+['"](\.\/[^'"]*?)\.tsx?['"]/g, (match, path) => {
      return match.replace(/\.tsx?/, ".js");
    })
    .replace(/import\s*\(['"](\.\/[^'"]*?)\.tsx?['"]\)/g, (match, path) => {
      return match.replace(/\.tsx?/, ".js");
    })
    .replace(/require\s*\(['"](\.\/[^'"]*?)\.tsx?['"]\)/g, (match, path) => {
      return match.replace(/\.tsx?/, ".js");
    });

  if (content !== fixed) {
    await writeFile(filePath, fixed, "utf-8");
    return true;
  }
  return false;
}

async function fixImportsInDirectory(dir: string) {
  const entries = await readdir(dir, { withFileTypes: true });
  let fixedCount = 0;

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    
    if (entry.isDirectory()) {
      fixedCount += await fixImportsInDirectory(fullPath);
    } else if (entry.isFile() && (extname(entry.name) === ".js" || extname(entry.name) === ".d.ts")) {
      if (await fixImportsInFile(fullPath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

const fixedCount = await fixImportsInDirectory(distDir);
if (fixedCount > 0) {
  console.log(`  ✓ Fixed imports in ${fixedCount} files`);
}

console.log("✅ Package build complete!");
console.log(`📁 Output directory: ${distDir}`);
