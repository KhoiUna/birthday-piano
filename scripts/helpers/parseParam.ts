export const parseParam = (query: string): string => {
  const url = new URL(window.location.href);
  return url.searchParams.get(query);
};
