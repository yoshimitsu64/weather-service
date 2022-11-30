import { StyledFooter, StyledWeatherContainer } from '@components/footer/styled';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import { useEffect } from 'react';
import { requestWeather } from '@store/sagaActions';
import Weather from '@components/weather';

const Footer = (): JSX.Element => {
  const city = useAppSelector((state) => state.accuweather.city);
  const weather = useAppSelector((state) => state.openWeatherMap.weather);

  const dispatch = useAppDispatch();

  useEffect(() => {
    city.lon &&
      dispatch(requestWeather(city.city as string, city.lon as number, city.lat as number));
  }, [city]);

  return (
    <StyledFooter>
      <StyledWeatherContainer>
        {weather!?.daily.length > 0 &&
          weather!.daily.map((day) => {
            return (
              <Weather
                key={`${day.dt}-${day.wind_speed}`}
                temperature={day.temp.max}
                icon={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              />
            );
          })}
      </StyledWeatherContainer>
    </StyledFooter>
  );
};

export default Footer;
