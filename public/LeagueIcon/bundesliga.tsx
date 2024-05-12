import Image from "next/image";
export default function BundesligaIcon() {
  return (
    <div className="w-12">
      <Image
        src="/LeagueIcon/bundesligaLogo.png"
        alt="logo"
        width={35}
        height={35}
      />
    </div>
  );
}
