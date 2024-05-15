"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
export default function ResultCard({
  team1,
  team2,
}: {
  team1: string;
  team2: string;
}) {
  const key = process.env.key;

  const [data, setData] = useState([]);
  const apiUrl = "https://serpapi.com/search.json?q=manchester+united&location=austin,+texas,+united+states";

  // Fetch data using crossorigin.me as a proxy
  fetch(`https://corsorigin.me/${apiUrl}`, { cache: "no-store" })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      // Process the fetched data
      console.log(data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  
  console.log(data);

  return (
    <>
      <div className=" justify-center items-center rounded-xl gap-1 h-32 w-60 p-3 flex shadow-md">
        <div className="flex justify-center gap-2 items-center">
          <p>{team1}</p>
          <Image
            src="/Club/real-madrid-c-f.svg"
            alt="clubIcon"
            width={20}
            height={20}
          />
          <span className="px-2 p-1 flex justify-center items-center h-fit w-fit bg-slate-300 rounded-md">
            4
          </span>
        </div>
        <span>:</span>
        <div className="flex justify-center items-center gap-2">
          <span className="px-2 p-1 flex justify-center items-center h-fit w-fit bg-slate-300 rounded-md">
            0
          </span>
          <Image
            src="/Club/fc-barcelona.svg"
            alt="clubName"
            width={20}
            height={20}
          />
          <p>{team2}</p>
        </div>
      </div>
    </>
  );
}
