export default function LeagueTable() {
  return (
    <>
      <div className="w-[40rem] p-3 shadow-sm rounded-lg bg-slate-50">
        <table className="w-full ">
          <thead>
            <tr className="w-full">
              <th className="font-normal text-start w-52">Club</th>
              <th className="font-normal text-center w-9">MP</th>
              <th className="font-normal text-center w-9">W</th>
              <th className="font-normal text-center w-9">D</th>
              <th className="font-normal text-center w-9">L</th>
              <th className="font-normal text-center w-9">GF</th>
              <th className="font-normal text-center w-9">GA</th>
              <th className="font-normal text-center w-9">GD</th>
              <th className="font-normal text-center w-9">Pts</th>
            </tr>
          </thead>
          <tbody className="leading-8">
            <tr className="border-t-2 ">
              <td className="w-fit flex justify-start gap-3">
                <p>1</p>
                <p>icon</p>
                <p>Real madrid</p>
              </td>
              <td className="w-fit text-center">10</td>
              <td className="w-fit text-center">9</td>
              <td className="w-fit text-center">1</td>
              <td className="w-fit text-center">0</td>
              <td className="w-fit text-center">30</td>
              <td className="w-fit text-center">40</td>
              <td className="w-fit text-center">50</td>
              <td className="w-fit text-center">50</td>
            </tr>
            <tr className="border-t-2">
              <td className="w-fit flex justify-start gap-3">
                <p>1</p>
                <p>icon</p>
                <p>Real madrid</p>
              </td>
              <td className="w-fit text-center">10</td>
              <td className="w-fit text-center">9</td>
              <td className="w-fit text-center">1</td>
              <td className="w-fit text-center">0</td>
              <td className="w-fit text-center">30</td>
              <td className="w-fit text-center">40</td>
              <td className="w-fit text-center">50</td>
              <td className="w-fit text-center">50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
