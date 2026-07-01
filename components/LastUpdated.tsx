export default function LastUpdated({ date }: { date: string }) {
  const formatted = new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <p className="mt-3 font-mono text-xs text-steel">
      Last updated: <time dateTime={date}>{formatted}</time>
    </p>
  );
}
