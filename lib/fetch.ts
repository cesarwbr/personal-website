import fetch from "isomorphic-unfetch";

async function fetchLib<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default fetchLib;
