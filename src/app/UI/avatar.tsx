import Image from "next/image";
export default function Avatar() {
  return (
    <>
      <Image
        src="/avatar.png"
        className=" rounded-full overflow-hidden"
        objectFit="fill"
        alt="avatar"
        width={40}
        height={40}
      />
    </>
  );
}
