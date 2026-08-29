import { GITHUB_USERNAME } from "@/config/site";

let cachedPromise = null;

export const getGitHubContributions = () => {
  if (!cachedPromise) {
    cachedPromise = fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch GitHub contributions");
        }
        return res.json();
      })
      .then((data) => data.contributions)
      .catch((err) => {
        // Reset cache on error so subsequent renders can retry
        cachedPromise = null;
        throw err;
      });
  }
  return cachedPromise;
};
