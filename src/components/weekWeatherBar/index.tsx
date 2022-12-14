import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';

import { requestWeather } from '@store/actions';
import { selectDayWeather } from '@store/selectors/selectDayWeather';
import { selectOpenCage } from '@store/selectors';

import DayWeather from './dayWeather';
import { StyledWeather, StyledWeatherBar, StyledWeatherBarContainer } from './styled';

const WeekWeather = (): JSX.Element => {
  const city = useAppSelector(selectOpenCage);
  const dayWeather = useAppSelector(selectDayWeather);

  const dispatch = useAppDispatch();

  useEffect(() => {
    !city?.geometry.lat && dispatch(requestWeather(city?.geometry.lat, city?.geometry.lng));
  }, [city]);

  return (
    <StyledWeatherBarContainer>
      <StyledWeatherBar data-cy="footer">
        <StyledWeather data-cy="week-weather">
          {dayWeather?.length > 0 &&
            dayWeather?.map(({ temperature, icon, key, day }) => (
              <DayWeather temperature={temperature} icon={icon} key={key} day={day} />
            ))}
        </StyledWeather>
      </StyledWeatherBar>
    </StyledWeatherBarContainer>
  );
};

export default WeekWeather;
