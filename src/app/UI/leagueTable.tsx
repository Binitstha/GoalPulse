export default function LeagueTable() {
  return (
    <>
      <div className="w-[40rem] p-2 shadow-sm rounded-lg bg-slate-50">
        <table className="w-full ">
          <tr className="w-full">
            <th className="font-normal text-start w-52">Club</th>
            <th className="font-normal w-9 text-start">MP</th>
            <th className="font-normal w-9 text-start">W</th>
            <th className="font-normal w-9 text-start">D</th>
            <th className="font-normal w-9 text-start">L</th>
            <th className="font-normal w-9 text-start">GF</th>
            <th className="font-normal w-9 text-start">GA</th>
            <th className="font-normal w-9 text-start">GD</th>
            <th className="font-normal w-9 text-start">Pts</th>
          </tr>
          <tr className="border-t-2">
            <td className="w-fit flex justify-start gap-3"><p>1</p><p>icon</p><p>Real madrid</p></td>
            <td className="w-fit">10</td>
            <td className="w-fit">9</td>
            <td className="w-fit">1</td>
            <td className="w-fit">0</td>
            <td className="w-fit">30</td>
            <td className="w-fit">40</td>
            <td className="w-fit">50</td>
            <td className="w-fit">50</td>
          </tr>
        </table>
      </div>
    </>
  );
}
