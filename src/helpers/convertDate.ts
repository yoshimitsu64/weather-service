export function convertDate(time : Date) {
  return new Date(time).toLocaleTimeString('en', {
    timeStyle: 'short',
    hour12: false,
    timeZone: 'UTC',
  });
}
