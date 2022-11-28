import { fetchCity } from '../api/fetchCity';

function getPosition(): Promise<GeolocationPosition> {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}

export async function getCoordinates() {
  const position: GeolocationPosition = await getPosition();
  console.log(position);
  return position;
}
