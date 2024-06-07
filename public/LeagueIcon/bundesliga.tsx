import Image from "next/image";
export default function BundesligaIcon() {
  return (
    <div className="w-fit">
      <Image
        src="/LeagueIcon/bundesligaLogo.png"
        alt="logo"
        width={35}
        height={35}
      />
    </div>
  );
}
