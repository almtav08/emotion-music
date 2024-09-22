"use client";
import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { PlainButton } from "../../components/PlainButton";
import { useRouter } from "next/navigation";

export default function Recognition() {
  const video = useRef<HTMLVideoElement>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recorded, setRecorded] = useState<boolean>(false);
  const [videoURL, setVideoURL] = useState<string>("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const router = useRouter();

  useEffect(() => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("models"),
      faceapi.nets.faceExpressionNet.loadFromUri("models"),
    ]);
  });

  const record = (stream: MediaStream) => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunksRef.current.push(e.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "video/webm" });
      setVideoBlob(blob);
      chunksRef.current = [];
      const videoURL = URL.createObjectURL(blob);
      setVideoURL(videoURL);
    };

    mediaRecorder.start();
  };

  const startVideo = async () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: true,
      })
      .then((stream) => {
        video.current!.srcObject = stream;
        video.current!.play();
        video.current!.addEventListener("play", startRecording);
        record(stream);
        setIsRecording(true);
      });
  };

  const startRecording = async () => {
    if (recorded) return;
    try {
      const canvas = document.getElementById("canvas") as HTMLCanvasElement;
      canvas.remove();
    } catch (error) {
      console.error("Error al eliminar el canvas:", error);
    }
    const canvas = faceapi.createCanvas(video.current!) as HTMLCanvasElement;
    canvas.classList.add("absolute");
    canvas.id = "canvas";
    const canvasPlace = document.getElementById(
      "canvas-place"
    ) as HTMLDivElement;
    canvasPlace.appendChild(canvas);
    const displaySize = {
      width: video.current!.width,
      height: video.current!.height,
    };
    faceapi.matchDimensions(canvas, displaySize);

    intervalRef.current = setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(video.current!, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext("2d")!.clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
    }, 100);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
    setRecorded(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Detener el stream de video (para ocultar la transmisión en vivo)
    const stream = video.current?.srcObject as MediaStream;
    stream?.getTracks().forEach((track) => track.stop());
    video.current!.srcObject = null; // Detener el video en vivo
    try {
      const canvas = document.getElementById("canvas") as HTMLCanvasElement;
      canvas.remove();
    } catch (error) {
      console.error("Error al eliminar el canvas:", error);
    }
  };

  const generateMusic = async () => {
    if (!videoBlob) return;
    const formData = new FormData();
    formData.append("file", videoBlob, "video.webm");

    try {
      setInterval(async () => {
        console.log("Faking request...");
        router.push("/music");
      }, 1000);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <div
      id='canvas-place'
      className='flex flex-col justify-center items-center gap-2 relative'>
      <div className=''></div>
      {!recorded && (
        <video
          id='video'
          autoPlay={true}
          width={1280}
          height={720}
          ref={video}
          muted={true}
          className={`rounded-lg bg-zinc-500/90 aspect-video`} // Ocultar cuando no se está grabando
        ></video>
      )}
      {recorded && (
        <video
          id='video-recorded'
          controls={true}
          autoPlay={true}
          width={1280}
          height={720}
          src={videoURL}
          className='rounded-lg bg-zinc-500/90 aspect-video'></video>
      )}
      {!isRecording && !recorded ? (
        <PlainButton onClick={startVideo}>Start recording</PlainButton>
      ) : (
        <div className='flex flex-row gap-4'>
          <PlainButton onClick={stopRecording}>Stop recording</PlainButton>
          <PlainButton onClick={generateMusic}>Generate Music</PlainButton>
        </div>
      )}
    </div>
  );
}
