export default function ErrorLine({ error }) {
  return error && error ? (
    <span className="text-sm text-red-500">{error}</span>
  ) : null;
}
