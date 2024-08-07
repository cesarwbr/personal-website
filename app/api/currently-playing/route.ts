export const dynamic = "force-dynamic"; // defaults to auto
import { getCurrentlyPlaying } from "../lib/spotify";

export async function GET() {
  const response = await getCurrentlyPlaying();

  if (response.status === 204 || response.status > 400) {
    return Response.json({ isPlaying: false });
  }

  const track = (await response.json()) as CurrentlyPlayingResponse;

  return Response.json(getNowPlayingMetadata(track));
}

function getNowPlayingMetadata(track: CurrentlyPlayingResponse) {
  return {
    album: {
      name: track.item.album.name,
      image: track.item.album.images[0].url,
    },
    artist: track.item.artists.map((artist) => artist.name).join(", "),
    isPlaying: track.is_playing,
    url: track.item.external_urls.spotify,
    title: track.item.name,
  };
}

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
