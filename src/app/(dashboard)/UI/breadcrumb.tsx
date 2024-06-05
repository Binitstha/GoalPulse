import clsx from "clsx";
import Link from "next/link";
import { GiArrowCluster } from "react-icons/gi";

interface breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: breadcrumb[] }) => {
  return (
    <>
      <nav aria-label="Breadcrumb" className=" mt-4 block">
        <ol className="flex text-xl md:text-2xl">
          {breadcrumbs.map((breadcrumb,index) => (
            <li
              key={breadcrumb.href}
              aria-current={breadcrumb.active}
              className={clsx(
                breadcrumb.active ? "text-gray-900" : "text-gray-500"
              )}
            >
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              {index < breadcrumbs.length -1 ? (<span className="mx-3 inline-block">/</span>):null}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
