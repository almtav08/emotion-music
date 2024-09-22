import { MutableRefObject, useEffect, useState } from "react";
import { Slider } from "./Slider";

export const SongControl = ({
  audio,
}: {
  audio: MutableRefObject<HTMLAudioElement | null>;
}) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const current = audio.current;
    current!.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      current!.removeEventListener("timeupdate", handleTimeUpdate);
    };
  });

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current!.currentTime);
  };

  const formatTime = (time: number) => {
    if (time == null) return `0:00`;

    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const duration = audio?.current?.duration ?? 0;

  return (
    <div className='flex gap-x-3 text-xs pt-2'>
      <span className='opacity-50 w-12 text-right'>
        {formatTime(currentTime)}
      </span>

      <Slider
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        className='w-[400px]'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onValueChange={(value: any) => {
          const [newCurrentTime] = value;
          audio.current!.currentTime = newCurrentTime;
        }}
      />

      <span className='opacity-50 w-12'>
        {duration ? formatTime(duration) : "0:00"}
      </span>
    </div>
  );
};
