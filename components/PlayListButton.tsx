import Link from "next/link";

export const PlayListButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <div className='relative inline-flex items-center justify-start p-2 overflow-hidden font-bold group'>
        <span className='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-60 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8'></span>
        <span className='relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900'>
          {children}
        </span>
        <span className='absolute'></span>
      </div>
    </Link>
  );
};
