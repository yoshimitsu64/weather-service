import { Hour } from '@interfaces/IVisualCrossing';

import {
  StyledTemp,
  StyledHourWeatherContainer,
  StyledTime,
  StyledImage,
} from '@components/widget/hourWeather/styled';

type Props = Pick<Hour, 'datetime' | 'temp' | 'icon'>;

const HourWeather = ({ datetime, temp, icon }: Props): JSX.Element => {
  return (
    <StyledHourWeatherContainer data-cy="hourly-weather">
      <StyledTemp>{Math.round(temp)}&#176;</StyledTemp>
      <StyledImage src={icon} />
      <StyledTime>{datetime}</StyledTime>
    </StyledHourWeatherContainer>
  );
};

export default HourWeather;
