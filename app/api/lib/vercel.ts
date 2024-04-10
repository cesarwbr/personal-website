const { VERCEL_WEBHOOK } = process.env;

export function rebuildWebsite() {
  return fetch(VERCEL_WEBHOOK);
}
