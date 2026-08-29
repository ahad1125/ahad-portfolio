import { useEffect, useState } from "react";
import { GitHubStars } from "./github-stars";
import { SOURCE_CODE_GITHUB_REPO } from "@/config/site";

function getStargazerCount() {
  return fetch(`https://api.github.com/repos/${SOURCE_CODE_GITHUB_REPO}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })
    .then((res) => {
      if (!res.ok) {
        return 0;
      }
      return res.json();
    })
    .then((json) => Number(json?.stargazers_count) || 0)
    .catch(() => 0);
}

export function NavItemGitHub() {
  const [stargazersCount, setStargazersCount] = useState(0);

  useEffect(() => {
    getStargazerCount().then((count) => setStargazersCount(count));
  }, []);

  return (
    <GitHubStars
      repo={SOURCE_CODE_GITHUB_REPO}
      stargazersCount={stargazersCount}
    />
  );
}
