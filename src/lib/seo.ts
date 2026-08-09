export const siteUrl = "https://www.mugavai.co";
export const siteName = "Mugavai.co";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
