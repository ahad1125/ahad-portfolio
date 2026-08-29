export const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {}
};
