import { SideMenuItem } from "./SideMenuItem";
import { playlists } from "../data/data";
import { SideMenuPlayList } from "./SideMenuPlayList";

const Home = () => (
  <svg width='24' height='24' fill='currentColor'>
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='m12.707 2.293 9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 0 1-3 3h-1v-7a3 3 0 0 0-2.824-2.995L13 12h-2a3 3 0 0 0-3 3v7H7a3 3 0 0 1-3-3v-6H3c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 0 1 1.414 0M13 14a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883-.993L11 14z' />
  </svg>
);

const Search = () => (
  <svg
    width='24'
    height='24'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'>
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6' />
  </svg>
);

const Create = () => (
  <svg
    width='24'
    height='24'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'>
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M12 5v14M5 12h14' />
  </svg>
);

const Library = () => (
  <svg
    role='img'
    height='24'
    width='24'
    aria-hidden='true'
    viewBox='0 0 24 24'
    fill='currentColor'>
    <path d='M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z'></path>
  </svg>
);

export const AsideMenu = () => {
  return (
    <>
      <nav className='flex flex-col gap-2'>
        <div className='p-2'>
          <ul>
            <SideMenuItem href='/music'>
              <Home />
              <span>Home</span>
            </SideMenuItem>
            <SideMenuItem href='/music'>
              <Search />
              <span>Search</span>
            </SideMenuItem>
            <SideMenuItem href='/music'>
              <Library />
              <span>Your Music</span>
            </SideMenuItem>
            <SideMenuItem href='/recognition'>
              <Create />
              <span>Generate Your Music</span>
            </SideMenuItem>
          </ul>
        </div>
      </nav>
      <div
        id='song-list'
        className='flex flex-col flex-1 gap-2 py-2 px-5 overflow-y-auto overflow-x-hidden'>
        {playlists.map((playlist) => (
          <SideMenuPlayList playlist={playlist} key={playlist.id}/>
        ))}
      </div>
    </>
  );
};
