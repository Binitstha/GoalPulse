// // src/api/proxy.js

// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { matchday } = req.query;

//   const myHeaders = new Headers();
//   myHeaders.append("X-Auth-Token", "f7df7abbc1c84acdab28c5aafd614c1b");

//   const requestOptions: RequestInit = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   try {
//     const response = await fetch(
//       `https://api.football-data.org/v4/competitions/PL/matches?matchday=${matchday}`,
//       requestOptions
//     );
//     if (!response.ok) {
//       throw new Error(`Error: ${response.statusText}`);
//     }
//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("error:", error);
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// }
