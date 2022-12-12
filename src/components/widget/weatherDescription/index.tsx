import { Ref, useRef } from 'react';

import { useAppSelector } from '@hooks/storeHooks';

import {
  selectOpenWeather,
  selectSelectedService,
  selectVisualCrossing,
} from '@store/selectors/storeSelectors';

import EventsModal, { ForwardRef } from '@components/eventsModal';
import {
  StyledCalendar,
  StyledCalendarImage,
  StyledDegrees,
  StyledDescription,
  StyledImage,
  StyledInfo,
  StyledTodayWeatherContainer,
  StyledWeatherDescriptionContainer,
} from '@components/widget/weatherDescription/styled';

const WeatherDescription = (): JSX.Element => {
  const ref = useRef<ForwardRef>();

  const visualCrossingWeather = useAppSelector(selectVisualCrossing);
  const openWeather = useAppSelector(selectOpenWeather);
  const selectedService = useAppSelector(selectSelectedService);

  const handleClick = () => (): void => {
    ref.current?.closeModal(true);
  };

  return (
    <StyledWeatherDescriptionContainer>
      <StyledCalendar onClick={handleClick()}>
        <StyledCalendarImage
          src={`${process.env.PUBLIC_URL}/SVGS/weekly-calendar-monthly-calendar-svgrepo-com.svg`}
          alt="didnt load"
        />
      </StyledCalendar>
      <StyledTodayWeatherContainer>
        <StyledInfo>
          <StyledDegrees>
            {Math.round(
              selectedService === 'OpenWeatherMap'
                ? openWeather?.daily[0].temp.day
                : visualCrossingWeather?.days[0].temp,
            )}
            &#176;C
          </StyledDegrees>
        </StyledInfo>
        <StyledImage
          src={
            selectedService === 'OpenWeatherMap'
              ? `http://openweathermap.org/img/wn/${openWeather?.daily[0].weather[0].icon}@2x.png`
              : `${process.env.PUBLIC_URL}/SVGS/${visualCrossingWeather?.days[0].icon}.svg`
          }
        />
      </StyledTodayWeatherContainer>
      <StyledDescription>{visualCrossingWeather?.days[0].description}</StyledDescription>
      <EventsModal ref={ref as Ref<ForwardRef>} />
    </StyledWeatherDescriptionContainer>
  );
};

export default WeatherDescription;
