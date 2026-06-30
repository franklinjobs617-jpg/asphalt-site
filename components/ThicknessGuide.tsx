import { THICKNESS_GUIDE } from "@/lib/calc";

export default function ThicknessGuide() {
  return (
    <div className="overflow-x-auto rounded-md border border-asphalt-900/10">
      <table className="w-full min-w-[480px] border-collapse font-body text-sm">
        <thead>
          <tr className="bg-asphalt-900 text-chalk">
            <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">
              Application
            </th>
            <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-widest">
              Recommended thickness
            </th>
          </tr>
        </thead>
        <tbody>
          {THICKNESS_GUIDE.map((row, i) => (
            <tr
              key={row.use}
              className={i % 2 === 0 ? "bg-chalk" : "bg-concrete-50"}
            >
              <td className="px-4 py-3 text-asphalt-900">{row.use}</td>
              <td className="px-4 py-3 font-mono tabular text-asphalt-900">{row.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
