import { StyledFooter, StyledWeatherContainer } from '@components/footer/styled';
import Weather from '@components/weather';

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <StyledWeatherContainer>
        <Weather />
      </StyledWeatherContainer>
    </StyledFooter>
  );
};

export default Footer;
