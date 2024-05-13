import Link from 'next/link';
import Avatar from '@/app/UI/avatar'
import Search from '@/app/UI/search'
export default function Page() {
  return (
    <>
      <main className="flex justify-center items-center gap-5">
        <Search/>
        <p>|</p>
        <Link href='./help'>Help</Link>
        <Avatar/>
      </main>
    </>
  );
}
