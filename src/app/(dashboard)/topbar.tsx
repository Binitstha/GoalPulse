import { Suspense } from "react";
import Search from "./UI/search";
import Link from "next/link";

export default function TopBar() {
  return (
    <>
      <div className="flex justify-center items-center gap-5">
        <Suspense>
          <Search />
        </Suspense>
      </div>
    </>
  );
}
