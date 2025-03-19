export default function Input({ ...props }) {
  return (
    <input
      {...props}
      className="w-full p-4 rounded-xl bg-slate placeholder:text-dark-slate lg:placeholder:text-lg border"
    />
  );
}
