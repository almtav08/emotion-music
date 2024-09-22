import { Playlist } from "../data/data";

export const SideMenuPlayList = ({ playlist }: { playlist: Playlist }) => {
  return (
    <a
      href={`/playlist/${playlist.id}`}
      className='flex gap-4 items-center p-2 rounded-lg hover:bg-zinc-600 font-medium transition duration-300'>
      <picture className='w-12 h-12 flex-none'>
        <img
          src={playlist.cover}
          alt={`Cover of ${playlist.title}`}
          className='object-cover rounded-lg w-full aspect-square'
        />
      </picture>
      <div className='flex flex-col gap-1 truncate'>
        <h3 className='text-sm font-semibold '>{playlist.title}</h3>
      </div>
    </a>
  );
};