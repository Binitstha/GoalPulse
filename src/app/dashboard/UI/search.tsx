"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";

const Search = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("query") || ""
  );

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);

    console.log("params", params);
    if (searchValue) params.set("query", searchValue);
    else params.delete("query");

    replace(`../search?${params.toString()}`);
  };

  return (
    <>
      <div className="relative flex flex-1 flex-shrink-0">
        <form
          onSubmit={handleSearch}
          className="w-full flex justify-center items-center"
        >
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
            placeholder="Search club..."
            required
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit">
            <GiMagnifyingGlass className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
