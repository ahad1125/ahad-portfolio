export function urlToName(url) {
  return url.replace(/(^\w+:|^)\/\//, "");
}

export function addQueryParams(urlString, query) {
  try {
    const url = new URL(urlString);

    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, value);
    }

    return url.toString();
  } catch {
    return urlString;
  }
}
