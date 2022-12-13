import Carousel from 'react-elastic-carousel';

import { useAppSelector } from '@hooks/storeHooks';

import { selectHourWeather } from '@store/selectors/selectHourWeather';

import HourWeather from '@components/widget/hourWeather';
import { StyledWeatherSlider } from '@components/widget/weatherSlider/styled';

const WeatherSlider = (): JSX.Element | null => {
  const hourWeather = useAppSelector(selectHourWeather);

  if (hourWeather.length === 0) {
    return null;
  }

  return (
    <StyledWeatherSlider data-cy="hourly-weather-slider">
      <Carousel isRTL={false} itemsToShow={3} itemsToScroll={3}>
        {hourWeather?.map(({ key, datetime, temp, icon }) => {
          return <HourWeather key={key} datetime={datetime} temp={temp} icon={icon} />;
        })}
      </Carousel>
    </StyledWeatherSlider>
  );
};

export default WeatherSlider;
