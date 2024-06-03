"use client";

import { FaceFrownIcon } from "@heroicons/react/24/outline";

const errorPage = () => {
  return (
    <main className="flex h-[46rem] flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">league detail is not availabel at the moment</h2>
      <p>Could not find requested resource</p>
      <p>Please try again later</p>
    </main>
  );
};

export default errorPage;
