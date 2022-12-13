export const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
};
