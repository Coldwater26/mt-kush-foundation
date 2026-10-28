import type { FoundationVideo as Video } from "@/lib/media";
export function FoundationVideo({video, portrait=false}: {video:Video;portrait?:boolean}) {
  const src=portrait && video.vertical ? video.vertical : video.video;
  return <video controls playsInline preload="none" width={portrait?1080:1920} height={portrait?1920:1080} poster={portrait?undefined:video.poster} className={`block w-full bg-black ${portrait ? "mx-auto max-h-[75vh] max-w-sm" : "aspect-video"}`} aria-label={`${video.title}${portrait?" — vertical version":""}`}>
    <source src={src} type="video/mp4"/><track kind="captions" src={video.captions} srcLang="en" label="English"/>
    Your browser does not support embedded video. <a href={src}>Open the video</a>.
  </video>;
}
