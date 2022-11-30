import { useAppSelector } from '@hooks/store';
import {
  StyledTodayWeatherContainer,
  StyledInfo,
  StyledImage,
  StyledDegrees,
  StyledDescription,
  StyledContainer,
} from '@components/todayWeather/styled';

const TodayWeather = (): JSX.Element => {
  const todayWeather = useAppSelector((state) => state.visualCrossing.weather);

  return (
    <StyledContainer>
      <StyledTodayWeatherContainer>
        <StyledInfo>
          <StyledDegrees>{Math.round(todayWeather!?.days[0].temp)}&#176;C</StyledDegrees>
        </StyledInfo>
        <StyledImage>
          <img src={`/SVGS/${todayWeather?.days[0].icon}.svg`} />
        </StyledImage>
      </StyledTodayWeatherContainer>
      <StyledDescription>{todayWeather!?.days[0].description}</StyledDescription>
    </StyledContainer>
  );
};

export default TodayWeather;
