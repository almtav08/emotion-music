import { songs } from "../data/data";
import { PlayListButton } from "./PlayListButton";
import { Song } from "./Song";

export const PlayList = ({ title, id }: { id: string; title: string }) => {

  return (
    <div className='w-full h-fit rounded-lg flex flex-col p-2 truncate'>
      {/* <div className='w-full text-lg font-bold'>{title}</div> */}
      <PlayListButton href={`/playlist/${id}`}>{title}</PlayListButton>
      <div className='playlist-card flex flex-row flex-nowrap gap-4 overflow-auto p-2 flex-1 w-full truncate'>
        <div className='flex flex-row gap-2 truncate'>
          {songs.map(
            (song) =>
              song.albumId.toString() === id && (
                <Song key={song.id} song={song} playlistId={id} />
              )
          )}
        </div>
      </div>
    </div>
  );
};
