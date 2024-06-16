import { useMemo } from "react";
import { cn } from "../../utils/cn";

export default function Button({ children, variant = "primary", className }) {
  const defaultClass = useMemo(() => {
    if (variant === "primary") {
      return "py-4 rounded-xl w-full text-white bg-black flex justify-center items-center lg:text-lg font-semibold";
    } else if (variant === "secondary") {
      return "py-4 rounded-xl w-full bg-blue-100 text-blue-400 flex justify-center items-center lg:text-lg font-semibold";
    }
  }, [variant]);
  return <button className={cn(defaultClass, className)}>{children}</button>;
}
