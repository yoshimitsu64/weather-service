import { Hour } from '@interfaces/IVisualCrossing';
import {
  StyledTemp,
  StyledHourWeatherContainer,
  StyledIcon,
  StyledTime,
} from '@components/hourWeather/styled';

type IProps = Pick<Hour, 'datetime' | 'temp' | 'icon'>;

const HourWeather = ({ datetime, temp, icon }: IProps): JSX.Element => {
  return (
    <StyledHourWeatherContainer>
      <StyledTemp>{Math.round(temp)}&#176;</StyledTemp>
      <StyledIcon>
        <img src={`/SVGS/${icon}.svg`}/>
      </StyledIcon>
      <StyledTime>{datetime}</StyledTime>
    </StyledHourWeatherContainer>
  );
};

export default HourWeather;
