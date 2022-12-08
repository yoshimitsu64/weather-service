import { Ref, useRef, useState } from 'react';

import {
  selectOpenWeather,
  selectSelectedService,
  selectVisualCrossing,
} from '@store/selectors/storeSelectors';
import { useAppSelector } from '@hooks/storeHooks';
import WeatherSlider from '@components/weatherSlider';
import TodayDate from '@components/date';
import Input from '@components/input';
import ButtonOptions from '@components/buttonOptions';
import EventsModal, { ForwardRef } from '@components/eventsModal';
import {
  StyledTodayWeatherContainer,
  StyledInfo,
  StyledImage,
  StyledDegrees,
  StyledDescription,
  StyledTodayBox,
  StyledHeader,
  StyledCalendar,
  StyledCalendarImage,
} from '@components/todayWeather/styled';

const TodayWeather = (): JSX.Element => {
  const ref = useRef<ForwardRef>();

  const visualCrossingWeather = useAppSelector(selectVisualCrossing);
  const openWeather = useAppSelector(selectOpenWeather);
  const selectedService = useAppSelector(selectSelectedService);

  const [isOpenCalendar, setIsOpenCalendar] = useState<boolean>(false);

  const handleClick = () => (): void => {
    setIsOpenCalendar(!isOpenCalendar);
    ref.current?.closeModal(true);
  };

  return (
    <StyledTodayBox>
      <StyledHeader>
        <TodayDate />
        <Input />
        <ButtonOptions />
        <EventsModal ref={ref as Ref<ForwardRef>} />
      </StyledHeader>
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
      {visualCrossingWeather?.days.length > 0 && <WeatherSlider />}
    </StyledTodayBox>
  );
};

export default TodayWeather;
