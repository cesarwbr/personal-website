import Image from "next/image";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import { MouseEvent } from "react";

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

interface CurrentlyPlayingResponse {
  is_playing: boolean;
  item: {
    name: string;
    artists: {
      name: string;
    }[];
    album: {
      name: string;
      images: {
        height: number;
        url: string;
        width: number;
      }[];
    };
    external_urls: {
      spotify: string;
    };
  };
}

// @ts-ignore
async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function CurrentlyPlayingSong() {
  let { data: currentlyPlaying } = useSWR<CurrentlyPlaying>(
    "/api/currently-playing",
    fetcher
  );

  function handleClick(event: MouseEvent) {
    if (!currentlyPlaying?.isPlaying) {
      event.preventDefault();
    }
  }

  return (
    <a
      href={currentlyPlaying?.isPlaying ? currentlyPlaying?.url : ""}
      onClick={handleClick}
      target="_blank"
      rel="noopener"
      className={`currenlty-playing${
        currentlyPlaying?.isPlaying ? " clickable" : ""
      }`}
    >
      <div
        className={`currenlty-playing--album ${
          currentlyPlaying?.isPlaying ? "currenlty-playing--album_animated" : ""
        }`}
      >
        <div className="currenlty-playing--album--image">
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
        <div className="currenlty-playing--album--circle" />
      </div>
      <div className="currenlty-playing--song">
        <div className="currenlty-playing--song--title">
          {currentlyPlaying?.isPlaying ? currentlyPlaying.title : "Not Playing"}
        </div>
        <div className="currenlty-playing--song--artist">
          {currentlyPlaying?.isPlaying ? currentlyPlaying.artist : "Spotify"}
        </div>
      </div>
      <Image
        src="/images/spotify.png"
        width="41"
        height="30"
        alt="Spotify Logo"
      />
      <style jsx>{`
        .currenlty-playing {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 12px 0 14px;
          border: 1px solid var(--light-border-color);
          box-sizing: border-box;
          border-radius: 40px;
          height: 75px;
          margin-bottom: 50px;
          cursor: default;
          text-decoration: none;
        }

        .currenlty-playing--album {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
        }

        .currenlty-playing--album_animated {
          animation: rotate-center 10s linear infinite both;
        }

        .currenlty-playing--album--image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
        }

        .currenlty-playing--album--circle {
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
          position: absolute;
          border: 3px solid var(--white-border);
          width: 60px;
          height: 60px;
          top: 0;
          left: 0;
          border-radius: 50%;
        }

        .currenlty-playing--album--circle::before {
          content: "";
          position: absolute;
          border: 1px solid var(--white-border);
          width: 15px;
          height: 15px;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          border-radius: 50%;
        }

        .currenlty-playing--album--circle::after {
          content: "";
          position: absolute;
          background: var(--white-border);
          width: 5px;
          height: 5px;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          border-radius: 50%;
        }

        .currenlty-playing--song {
          margin: 0 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 190px;
        }

        .currenlty-playing--song > div {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 190px;
        }

        .currenlty-playing--song--title {
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          color: var(--article-primary-color);
        }

        .currenlty-playing--song--artist {
          margin-top: 4px;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          color: var(--article-secondary-color);
        }

        .clickable {
          cursor: pointer;
        }

        @keyframes rotate-center {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </a>
  );
}
