export async function fetchCity(coords: GeolocationPosition) {
  const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    params: { namePrefix: 'Mogi' },
    headers: {
      'X-RapidAPI-Key': 'c15fa3545emsha363e684e749560p19a2d8jsn0959c117a49a',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };
  const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities`, options);
  const data = response.json();
  return data;
}
