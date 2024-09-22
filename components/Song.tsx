import { Song as SongType } from "../data/data";
import Image from "next/image";
import { SongPlayButton } from "./SongPlayButton";

export const Song = ({
  song,
  playlistId,
}: {
  song: SongType;
  playlistId: string;
}) => {
  return (
    <article className='group relative hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30 rounded-md ransi transition-all duration-300'>
      <div
        className={`absolute right-4 bottom-12 translate-y-4
    transition-all duration-500 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    z-10
  `}>
        <SongPlayButton songId={song.id.toString()} playistId={playlistId} />
      </div>
      <div
        className='bg-zinc-600/30 w-36 h-full rounded-md p-3 flex flex-col gap-2 items-center cursor-pointer'
        key={song.id}>
        <Image
          width={200}
          height={200}
          src={song.image}
          alt={`Cover of song ${song.title}`}
          className='rounded-md aspect-square'
        />
        <div className='flex flex-col gap-1 truncate'>
          <h3 className='text-xs font-semibold '>{song.title}</h3>
        </div>
      </div>
    </article>
  );
};
