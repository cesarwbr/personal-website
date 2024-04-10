import fetch from "isomorphic-unfetch";
import { Fetcher } from "swr";

function fetchLib<T>() {
  const fetcher: Fetcher<T> = async (apiURL: string) => {
    const res = await fetch(apiURL);
    return res.json();
  };

  return fetcher;
}

export const apiFetcher: Fetcher = async (apiURL: string) => {
  const res = await fetch(apiURL);
  return res.json();
};

export default fetchLib;
