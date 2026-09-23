/**
 * Utility function to split an array of projects into chunks of specified size.
 */
export function chunkProjects(array, size = 2) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
