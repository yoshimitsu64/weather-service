import { useAppSelector } from '@hooks/store';
import WeatherSlider from '@components/weatherSlider';
import TodayDate from '@components/date';
import Input from '@components/input';
import ButtonOptions from '@components/buttonOptions';
import {
  StyledTodayWeatherContainer,
  StyledInfo,
  StyledImage,
  StyledDegrees,
  StyledDescription,
  StyledTodayBox,
  StyledHeader,
  StyledCalendar,
} from '@components/todayWeather/styled';
import React, { useRef, useState } from 'react';
import EventsModal from '@components/eventsModal';

const TodayWeather = (): JSX.Element => {
  const visualCrossingWeather = useAppSelector((state) => state.visualCrossing.weather);
  const openWeather = useAppSelector((state) => state.openWeatherMap.weather);
  const selectedService = useAppSelector((state) => state.selectedService.service);
  const calendarRef = useRef<HTMLSpanElement>(null);

  const [isOpenCalendar, setIsOpenCalendar] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleClick =
    () =>
    (e: React.MouseEvent<HTMLSpanElement>): void => {
      setIsOpenCalendar(!isOpenCalendar);
      setCoordinates({ x: calendarRef.current!.offsetLeft, y: calendarRef.current!.offsetTop });
    };

  return (
    <StyledTodayBox>
      <StyledHeader>
        <TodayDate />
        <ButtonOptions />
        <Input />
        <EventsModal coordinates={coordinates} display={isOpenCalendar ? 'block' : 'none'} />
      </StyledHeader>
      <StyledCalendar onClick={handleClick()} ref={calendarRef}>
        <img src="/SVGS/events-calendar-svgrepo-com.svg" width={40} height={40} />
      </StyledCalendar>
      <StyledTodayWeatherContainer>
        <StyledInfo>
          <StyledDegrees>
            {Math.round(
              selectedService === 'OpenWeatherMap'
                ? openWeather!?.daily[0].temp.day
                : visualCrossingWeather!?.days[0].temp,
            )}
            &#176;C
          </StyledDegrees>
        </StyledInfo>
        <StyledImage>
          <img
            src={
              selectedService === 'OpenWeatherMap'
                ? `http://openweathermap.org/img/wn/${
                    openWeather!?.daily[0].weather[0].icon
                  }@2x.png`
                : `/SVGS/${visualCrossingWeather?.days[0].icon}.svg`
            }
          />
        </StyledImage>
      </StyledTodayWeatherContainer>
      <StyledDescription>{visualCrossingWeather!?.days[0].description}</StyledDescription>
      {visualCrossingWeather!?.days.length > 0 && <WeatherSlider />}
    </StyledTodayBox>
  );
};

export default TodayWeather;
