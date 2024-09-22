"use client"

import { usePlayerStore } from "../store/playerStore";
import { songs } from "../data/data";
import { useEffect } from "react";

const Play = ({ className }: { className: string }) => (
  <svg
    className={className}
    role='img'
    height='16'
    width='16'
    aria-hidden='true'
    viewBox='0 0 16 16'>
    <path d='M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z'></path>
  </svg>
);

export const Pause = ({ className }: { className: string }) => (
  <svg
    className={className}
    role='img'
    height='16'
    width='16'
    aria-hidden='true'
    viewBox='0 0 16 16'>
    <path d='M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z'></path>
  </svg>
);

export const SongPlayButton = ({
  songId,
  playistId,
}: {
  songId: string;
  playistId: string;
  }) => {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore((state) => state);

  useEffect(() => {
    }, [currentMusic]);

  const isPlayingSong =
    isPlaying &&
    currentMusic?.playlist == playistId &&
    currentMusic?.song == songId;

  const handleClick = () => {
    if (isPlayingSong) {
      setIsPlaying(false);
      return;
    } else {
      setIsPlaying(true);
      const playlistSongs = songs.filter(
        (song) => song.albumId.toString() === playistId
      );
      setCurrentMusic({ songs: playlistSongs, playlist: playistId, song: songId });
    }
  };

  return (
    <button
      onClick={handleClick}
      className='card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400'>
      {isPlayingSong ? (
        <Pause className='w-5 h-5' />
      ) : (
        <Play className='w-5 h-5' />
      )}
    </button>
  );
};
