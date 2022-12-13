import { days } from '@constants/date';

import {
  StyledDayWeather,
  StyledImage,
  StyledDay,
  StyledTemperature,
} from '@components/footer/dayWeather/styled';

interface IProps {
  temperature: number;
  icon: string;
  day: number;
}

const DayWeather = ({ temperature, icon, day }: IProps): JSX.Element => {
  return (
    <StyledDayWeather data-cy="day-weather">
      <StyledDay>{days[new Date(day * 1000).getDay()]}</StyledDay>
      <StyledImage src={icon} alt="didnt load" />
      <StyledTemperature>{Math.round(temperature)}&#176;</StyledTemperature>
    </StyledDayWeather>
  );
};

export default DayWeather;
