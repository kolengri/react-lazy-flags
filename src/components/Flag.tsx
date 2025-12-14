import { lazy, Suspense, type ComponentType } from "react";
import type { SVGProps } from "react";
import { Skeleton } from "./flags/Skeleton";
import { Fallback } from "./flags/Fallback";

// Convert flag code to component name (PascalCase)
function flagCodeToComponentName(code: string): string {
  return code
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

// Cache for lazy components to avoid re-creating them
const componentCache = new Map<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
>();

// Get or create lazy component for a flag code
function getLazyFlagComponent(
  code: string
): ComponentType<SVGProps<SVGSVGElement>> {
  const componentName = flagCodeToComponentName(code);

  if (componentCache.has(componentName)) {
    return componentCache.get(componentName)!;
  }

  const LazyComponent = lazy(async () => {
    try {
      const module = await import(`./flags/${componentName}.tsx`);
      return module;
    } catch (error) {
      console.error(
        `Failed to load flag component for code: ${code} (component: ${componentName})`,
        error
      );
      // Return a fallback component
      return {
        default: (props: SVGProps<SVGSVGElement>) => (
          <Fallback code={code} {...props} />
        ),
      };
    }
  });

  componentCache.set(componentName, LazyComponent);
  return LazyComponent;
}

export interface FlagProps extends SVGProps<SVGSVGElement> {
  code: string;
  fallback?: React.ReactNode;
}

export function Flag({ code, fallback, ...props }: FlagProps) {
  const LazyFlag = getLazyFlagComponent(code);

  return (
    <Suspense fallback={fallback || <Skeleton {...props} />}>
      <LazyFlag {...props} />
    </Suspense>
  );
}

export default Flag;
