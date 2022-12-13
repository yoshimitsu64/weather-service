import WeekWeather from '@components/footer/weekWeather';

import { memo } from 'react';

import { StyledFooter, StyledWeatherContainer } from './styled';

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <StyledWeatherContainer data-cy="footer">
        <WeekWeather />
      </StyledWeatherContainer>
    </StyledFooter>
  );
};

export default memo(Footer);
