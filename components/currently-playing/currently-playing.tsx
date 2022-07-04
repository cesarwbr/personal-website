import Image from "next/image";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import styles from "./currently-playing.module.css";

export interface CurrentlyPlaying {
  album?: {
    name: string;
    image: string;
  };
  artist?: string;
  isPlaying: boolean;
  url?: string;
  title?: string;
}

async function fetcher<JSON = { data: CurrentlyPlaying }>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function CurrentlyPlayingSong() {
  let { data: currentlyPlaying } = useSWR<CurrentlyPlaying>(
    "/api/currently-playing",
    fetcher,
    {
      refreshInterval: 10000,
    }
  );

  return (
    <a
      href={
        currentlyPlaying?.isPlaying
          ? currentlyPlaying?.url
          : "https://open.spotify.com/playlist/4Qy0aQbcEkaTCT3RdAR81a?si=c151b6888ade4668"
      }
      target="_blank"
      rel="noreferrer"
      className={`${styles["currenlty-playing"]} ${styles["clickable"]}`}
    >
      <div
        className={`${styles["currenlty-playing--album"]} ${
          currentlyPlaying?.isPlaying
            ? styles["currenlty-playing--album_animated"]
            : ""
        }`}
      >
        <div className={styles["currenlty-playing--album--image"]}>
          <Image
            width="60"
            height="60"
            src={
              currentlyPlaying?.isPlaying
                ? currentlyPlaying?.album.image
                : "/images/vinyl.jpg"
            }
            loading="eager"
            alt={
              currentlyPlaying?.isPlaying
                ? currentlyPlaying?.album?.name
                : "Not Playing"
            }
          />
        </div>
        <div className={styles["currenlty-playing--album--circle"]} />
      </div>
      <div className={styles["currenlty-playing--song"]}>
        <div className={styles["currenlty-playing--song--title"]}>
          {currentlyPlaying?.isPlaying ? currentlyPlaying.title : "Not Playing"}
        </div>
        <div className={styles["currenlty-playing--song--artist"]}>
          {currentlyPlaying?.isPlaying ? currentlyPlaying.artist : "Spotify"}
        </div>
      </div>
      <Image
        src="/images/spotify.png"
        width="41"
        height="30"
        alt="Spotify Logo"
      />
    </a>
  );
}
