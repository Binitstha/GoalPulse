import { Match } from "@/types/type";

const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const USERNAME = process.env.NEXT_PUBLIC_USERNAME;

export async function fetchApi(endpoint: string): Promise<any> {
  const res = await fetch(
    `${API_URL}/${endpoint}&user=${USERNAME}&token=${TOKEN}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch match data: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}

// export async function getLiveStanding(): Promise<any> {
//   return fetchApi(`leagues/?t=standings_live&season_id=13449`);
// }

export async function getScheduledMatch(): Promise<Match> {
  return fetchApi(`livescores/?t=notstarted`);
}

export function convertTo12HourFormat(time: string) {
  let [hours, minutes, second] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
}
