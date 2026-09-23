/**
 * Helper function to decode base64 encoded string (used for email obfuscation)
 */
export function decodeEmail(encoded) {
  if (!encoded) return "";
  try {
    return atob(encoded);
  } catch {
    return encoded;
  }
}

/**
 * Helper function to get the first alphanumeric character from a string,
 * skipping leading non-alphanumeric characters/emojis.
 */
export function getFirstAlphanumeric(str) {
  if (!str) return "";
  const match = str.match(/[a-zA-Z0-9]/);
  return match ? match[0].toUpperCase() : str.charAt(0);
}
