import { $ } from "bun";
import { readdir } from "fs/promises";
import { join, basename, extname } from "path";

const svgDir = "./src/svg";
const outputDir = "./src/components/flags";

// Create output directory if it doesn't exist
await $`mkdir -p ${outputDir}`;

// Get all SVG files
const files = await readdir(svgDir);
const svgFiles = files.filter((file) => file.endsWith(".svg"));

console.log(`Found ${svgFiles.length} SVG files`);

// Generate components for each SVG file in parallel
const results = await Promise.all(
  svgFiles.map(async (file) => {
    const filePath = join(svgDir, file);
    const fileName = basename(file, extname(file));

    // Convert filename to PascalCase component name
    const componentName = fileName
      .split(/[-_]/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");

    const outputPath = join(outputDir, `${componentName}.tsx`);

    // Generate component using svgr
    try {
      await $`bunx svgr --typescript --icon --replace-attr-values "#000=currentColor" --out-dir ${outputDir} --filename-case pascal -- ${filePath}`.quiet();

      // Read and update the generated file
      if (await Bun.file(outputPath).exists()) {
        const content = await Bun.file(outputPath).text();

        // Update component name in the file (svgr generates SvgComponentName)
        const svgComponentName = `Svg${componentName}`;
        const updatedContent = content
          .replace(
            new RegExp(`const ${svgComponentName} =`, "g"),
            `const ${componentName} =`
          )
          .replace(
            new RegExp(`export default ${svgComponentName};`, "g"),
            `export default ${componentName};`
          );

        await Bun.write(outputPath, updatedContent);
        console.log(`Generated ${componentName}.tsx`);
        return { success: true, componentName };
      }
      return { success: false, componentName, error: "File not generated" };
    } catch (error) {
      console.error(`Error generating ${componentName}:`, error);
      return { success: false, componentName, error };
    }
  })
);

const successful = results.filter((r) => r.success).length;

console.log(
  `\n✅ Generated ${successful}/${svgFiles.length} flag components in ${outputDir}`
);
