import { cn } from "../../utils/cn";

export default function Heading({ children, className }) {
  return (
    <h1
      className={cn(
        "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
        className
      )}
    >
      {children}
    </h1>
  );
}
