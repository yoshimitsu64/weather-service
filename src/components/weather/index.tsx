import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import DayWeather from '@components/dayWeather';
import { requestWeather } from '@store/actions';
import { selectDayWeather } from '@store/selectors/selectors';
import { selectAccuWeather } from '@store/selectors/storeSelectors';
import { StyledWeather } from '@components/weather/styled';

const WeekWeather = (): JSX.Element => {
  const city = useAppSelector(selectAccuWeather);
  const dayWeather = useAppSelector(selectDayWeather);

  const dispatch = useAppDispatch();

  useEffect(() => {
    city.lon && dispatch(requestWeather(city.lon as number, city.lat as number));
  }, [city]);

  return (
    <StyledWeather>
      {dayWeather?.length > 0 &&
        dayWeather?.map((day) => (
          <DayWeather temperature={day.temperature} icon={day.icon} key={day.key} day={day.day} />
        ))}
    </StyledWeather>
  );
};

export default WeekWeather;
