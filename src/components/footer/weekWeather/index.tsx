import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';

import DayWeather from '@components/footer/dayWeather';

import { requestWeather } from '@store/actions';
import { selectDayWeather } from '@store/selectors/selectDayWeather';
import { selectOpenCage } from '@store/selectors';

import { StyledWeather } from './styled';

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
        dayWeather?.map(({ temperature, icon, key, day }) => (
          <DayWeather temperature={temperature} icon={icon} key={key} day={day} />
        ))}
    </StyledWeather>
  );
};

export default WeekWeather;
