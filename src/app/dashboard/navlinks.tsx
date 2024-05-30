"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import PremierLeagueIcon from "../../../public/LeagueIcon/premier-league";
import Laliga from "../../../public/LeagueIcon/laliga";
import Ligue1Icon from "../../../public/LeagueIcon/ligue-1";
import BundesligaIcon from "../../../public/LeagueIcon/bundesliga";
import SeriaALogo from "../../../public/LeagueIcon/serieALogo";

export default function Navlinks() {
  const navlinks = [
    {
      name: "premier league",
      href: "/dashboard/premier-league",
      icon: PremierLeagueIcon,
    },
    {
      name: "La liga",
      href: "/dashboard/la-liga",
      icon: Laliga,
    },
    {
      name: "Ligue-1",
      href: "/dashboard/Ligue-1",
      icon: Ligue1Icon,
    },
    {
      name: "Bundesliga",
      href: "/dashboard/Bundesliga",
      icon: BundesligaIcon,
    },
    {
      name: "Seria A",
      href: "/dashboard/seria-A",
      icon: SeriaALogo,
    },
  ];

  const pathname = usePathname();
  return (
    <>
      {navlinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              { "bg-sky-100 text-blue-600": link.href === pathname },
              `flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`
            )}
          >
            <LinkIcon />
            <p className={`hidden md:block`}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
