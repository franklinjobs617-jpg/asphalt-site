interface Row {
  label: string;
  a: string;
  b: string;
}

export default function CompareTable({
  colA,
  colB,
  rows,
}: {
  colA: string;
  colB: string;
  rows: Row[];
}) {
  return (
    <div className="overflow-x-auto rounded-md border border-asphalt-900/10">
      <table className="w-full min-w-[520px] border-collapse font-body text-sm">
        <thead>
          <tr className="bg-asphalt-900 text-chalk">
            <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest"> </th>
            <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest text-marking">{colA}</th>
            <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">{colB}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-chalk" : "bg-concrete-50"}>
              <td className="px-4 py-3 font-semibold text-asphalt-900">{row.label}</td>
              <td className="px-4 py-3 text-steel">{row.a}</td>
              <td className="px-4 py-3 text-steel">{row.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
