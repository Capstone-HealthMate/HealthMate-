import { useMemo } from "react";
import { cn } from "../../utils/cn";

export default function Button({ children, variant = "primary", className }) {
  const defaultClass = useMemo(() => {
    switch (variant) {
      case "primary":
        return "px-6 py-2.5 rounded-xl text-white bg-black flex justify-center items-center text-base font-semibold transition-all duration-300 hover:bg-gray-800";
      case "secondary":
        return "px-6 py-2.5 rounded-xl bg-blue-100 text-blue-400 flex justify-center items-center text-base font-semibold transition-all duration-300 hover:bg-blue-200";
      case "filled":
        return "px-6 py-2.5 rounded-xl text-white bg-gray-900 border border-gray-900 flex justify-center items-center text-base font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900";
      default:
        return "";
    }
  }, [variant]);

  return <button className={cn(defaultClass, className)}>{children}</button>;
}
