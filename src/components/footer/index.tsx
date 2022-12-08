import WeekWeather from '@components/weather';
import { StyledFooter, StyledWeatherContainer } from '@components/footer/styled';

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <StyledWeatherContainer>
        <WeekWeather />
      </StyledWeatherContainer>
    </StyledFooter>
  );
};

export default Footer;
