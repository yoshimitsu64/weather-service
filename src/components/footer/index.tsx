import WeekWeather from '@components/weekWeather';
import { StyledFooter, StyledWeatherContainer } from '@components/footer/styled';

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <StyledWeatherContainer data-cy="footer">
        <WeekWeather />
      </StyledWeatherContainer>
    </StyledFooter>
  );
};

export default Footer;
