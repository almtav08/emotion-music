//import Image from "next/image";
import { LinkButton } from "../components/LinkButton";

export default function Home() {
  return (
    <div className='flex justify-center items-center w-full h-full flex-col gap-2'>
      <p className='text-4xl'>Welcome to</p>
      <p className='text-6xl font-bold landing-text'>Emotion Music</p>
      <p className='text-lg landing-subtext'>
        <i>The best AI powered music generator based on how you feel</i>
      </p>
      <div className='flex flex-row gap-3 mt-4'>
        <LinkButton href='/recognition'>Generate Music</LinkButton>
        <LinkButton href='/music'>List Music</LinkButton>
      </div>
    </div>
  );
}
