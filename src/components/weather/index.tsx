import { StyledWeather } from '@components/weather/styled';

interface IProps {
  temperature: number;
  icon: string;
}

const Weather = ({ temperature, icon }: IProps): JSX.Element => {
  return (
    <StyledWeather>
      <img src={icon} alt="didnt load" />
      {Math.round(temperature)}&#176;
    </StyledWeather>
  );
};

export default Weather;
