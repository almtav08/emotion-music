"use client";

import { AsideMenu } from "../../components/AsideMenu";
import { Player } from "../../components/Player";
import { PlayList } from "../../components/PlayList";
import { playlists } from "../../data/data";

export default function Music() {
  return (
    <div id='app' className='relative h-screen p-2 gap-2 text-white'>
      <aside className='[grid-area:aside] flex flex-col bg-zinc-800 rounded-lg'>
        <AsideMenu />
      </aside>

      <main className='[grid-area:main] bg-zinc-800 rounded-lg overflow-y-auto music-page'>
        {playlists.map((playlist) => (
          <PlayList key={playlist.id} title={playlist.title} id={playlist.id} />
        ))}
      </main>

      <footer className='[grid-area:reader] min-h-[5rem] rounded-lg'>
        <Player />
      </footer>
    </div>
  );
  /*   return (
    <>
      <div className='flex items-center w-full h-full flex-col flex-nowrap gap-2 p-10 overflow-auto music-page'>
        <div className='flex flex-col music-page gap-4'>
          <PlayList title='Your music' href='/music/yourmusic' />
          <PlayList title='Joyfull' href='/music/joyfull' />
          <PlayList title='Lofi' href='/music/lofi' />
          <PlayList title='Active' href='/music/active' />
          <PlayList title='Chill' href='/music/chill' />
        </div>
      </div>
      <div className='absolute bottom-10 right-10'>
        <LinkButton href='/'>Return Home</LinkButton>
      </div>
    </>
  );*/
}
