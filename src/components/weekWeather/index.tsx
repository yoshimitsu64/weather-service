import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import DayWeather from '@components/dayWeather';
import { requestWeather } from '@store/actions';
import { selectDayWeather } from '@store/selectors/selectors';
import { selectOpenCage } from '@store/selectors/storeSelectors';
import { StyledWeather } from '@components/weekWeather/styled';

const WeekWeather = (): JSX.Element => {
  const city = useAppSelector(selectOpenCage);
  const dayWeather = useAppSelector(selectDayWeather);

  const dispatch = useAppDispatch();

  useEffect(() => {
    !city?.geometry.lat && dispatch(requestWeather(city?.geometry.lat, city?.geometry.lng));
  }, [city]);

  return (
    <StyledWeather data-cy="week-weather">
      {dayWeather?.length > 0 &&
        dayWeather?.map((day) => (
          <DayWeather temperature={day.temperature} icon={day.icon} key={day.key} day={day.day} />
        ))}
    </StyledWeather>
  );
};

export default WeekWeather;
