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
        <img width={70} height={70} src={icon} />
      </StyledIcon>
      <StyledTime>{datetime}</StyledTime>
    </StyledHourWeatherContainer>
  );
};

export default HourWeather;
