import { Suspense } from "react";
import Search from "./UI/search";
import Link from "next/link";
import Breadcrumb from "@/app/(dashboard)/UI/breadcrumb";

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
