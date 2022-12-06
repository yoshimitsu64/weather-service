import { StyledWeather } from '@components/weather/styled';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import DayWeather from '@components/dayWeather';
import { useEffect } from 'react';
import { requestWeather } from '@store/sagaActions';
import { selectDayWeather } from '@store/selectors';

const Weather = (): JSX.Element => {
  const city = useAppSelector((state) => state.accuweather.city);
  const dayWeather = useAppSelector(selectDayWeather);

  const dispatch = useAppDispatch();

  useEffect(() => {
    city.lon && dispatch(requestWeather(city.lon as number, city.lat as number));
  }, [city]);

  return (
    <>
      {dayWeather!?.length > 0 && dayWeather!?.map((day) => (
        <DayWeather temperature={day.temperature} icon={day.icon} key={day.key}/>
      ))}
    </>
  );
};

export default Weather;
