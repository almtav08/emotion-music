import Link from "next/link";

export const SideMenuItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link
        href={href}
        className='flex gap-4 items-center py-3 px-5 rounded-lg hover:bg-zinc-600 font-medium transition duration-300'>
        {children}
      </Link>
    </li>
  );
};