import { useRef } from 'react';

import { useAppSelector } from '@hooks/storeHooks';

import { selectOpenWeather, selectSelectedService, selectVisualCrossing } from '@store/selectors';

import { ForwardRef } from '@customTypes/index';

import EventsModal from '@components/modals/eventsModal';

import { openWeatherMapImageURL } from '@constants/images';

import {
  StyledCalendar,
  StyledCalendarImage,
  StyledDegrees,
  StyledDescription,
  StyledImage,
  StyledInfo,
  StyledTodayWeatherContainer,
  StyledWeatherDescriptionContainer,
} from './styled';

const WeatherDescription = (): JSX.Element => {
  const ref = useRef<ForwardRef>(null);

  const visualCrossingWeather = useAppSelector(selectVisualCrossing);
  const openWeather = useAppSelector(selectOpenWeather);
  const selectedService = useAppSelector(selectSelectedService);

  const weatherImageSrc =
    selectedService === 'OpenWeatherMap'
      ? `${openWeatherMapImageURL}${openWeather?.daily?.[0].weather[0].icon}@2x.png`
      : require(`assets/SVGS/${visualCrossingWeather?.days?.[0].icon}.svg`);

  const degrees =
    selectedService === 'OpenWeatherMap'
      ? openWeather?.daily?.[0].temp.day
      : visualCrossingWeather?.days[0].temp;

  const handleClick = () => (): void => {
    ref.current?.closeModal(true);
  };

  return (
    <StyledWeatherDescriptionContainer>
      <StyledCalendar onClick={handleClick()}>
        <StyledCalendarImage
          src={require('@assets/SVGS/weekly-calendar-monthly-calendar-svgrepo-com.svg').default}
          alt="didnt load"
        />
      </StyledCalendar>
      <StyledTodayWeatherContainer>
        <StyledInfo>
          <StyledDegrees>
            {Math.round(degrees)}
            &#176;C
          </StyledDegrees>
        </StyledInfo>
        <StyledImage src={weatherImageSrc} />
      </StyledTodayWeatherContainer>
      <StyledDescription>{visualCrossingWeather?.days[0].description}</StyledDescription>
      <EventsModal ref={ref} />
    </StyledWeatherDescriptionContainer>
  );
};

export default WeatherDescription;
