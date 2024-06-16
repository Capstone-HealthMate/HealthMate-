import { cn } from "../../utils/cn";

export default function Paragraph({ children, className }) {
  return <p className={cn("text-black lg:text-lg", className)}>{children}</p>;
}
