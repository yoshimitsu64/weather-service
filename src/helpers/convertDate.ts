export function convertDate(time : Date): string  {
  return new Date(time).toLocaleTimeString('en', {
    timeStyle: 'short',
    hour12: false,
  });
}
