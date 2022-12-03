import { useAppSelector } from '@hooks/store';
import Carousel from 'react-elastic-carousel';
import HourWeather from '@components/hourWeather';
import {
  StyledTodayWeatherContainer,
  StyledInfo,
  StyledImage,
  StyledDegrees,
  StyledDescription,
  StyledTodayBox,
} from '@components/todayWeather/styled';

const TodayWeather = (): JSX.Element => {
  const todayWeather = useAppSelector((state) => state.visualCrossing.weather);

  return (
    <StyledTodayBox>
      <StyledTodayWeatherContainer>
        <StyledInfo>
          <StyledDegrees>{Math.round(todayWeather!?.days[0].temp)}&#176;C</StyledDegrees>
        </StyledInfo>
        <StyledImage>
          <img src={`/SVGS/${todayWeather?.days[0].icon}.svg`} />
        </StyledImage>
      </StyledTodayWeatherContainer>
      <StyledDescription>{todayWeather!?.days[0].description}</StyledDescription>
      {todayWeather!?.days.length > 0 && (
        // @ts-ignore
        <Carousel isRTL={false} itemsToShow={3} itemsToScroll={3} key={1}>
          {todayWeather?.days[0].hours.map((hour) => {
            return (
              <HourWeather
                key={hour.datetime}
                datetime={hour.datetime.slice(0, 5)}
                temp={hour.temp}
                icon={hour.icon}
              />
            );
          })}
        </Carousel>
      )}
    </StyledTodayBox>
  );
};

export default TodayWeather;
