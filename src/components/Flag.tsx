import { lazy, Suspense, type ComponentType } from "react";
import type { SVGProps } from "react";
import { Skeleton } from "./flags/Skeleton";
import { Fallback } from "./flags/Fallback";
import { flagComponentLoaders, type FlagComponentName } from "./flags";

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
  const componentName = flagCodeToComponentName(code) as FlagComponentName;

  if (componentCache.has(componentName)) {
    return componentCache.get(componentName)!;
  }

  // Check if component loader exists
  const loader = flagComponentLoaders[componentName];
  if (!loader) {
    console.warn(
      `Flag component not found for code: ${code} (component: ${componentName})`
    );
    // Return a fallback component directly (not lazy)
    const FallbackComponent = (props: SVGProps<SVGSVGElement>) => (
      <Fallback code={code} {...props} />
    );
    componentCache.set(componentName, FallbackComponent);
    return FallbackComponent;
  }

  // Create lazy component using the loader function
  // This ensures true lazy loading - component is only loaded when needed
  const LazyComponent = lazy(async () => {
    try {
      // Call the loader function to dynamically import the component
      const module = await loader();
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
