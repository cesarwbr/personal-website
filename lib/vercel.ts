const { VERCEL_WEBHOOK } = process.env;

export function rebuildWebsite() {
  fetch(VERCEL_WEBHOOK);
}
