import Carousel from 'react-elastic-carousel';

import { useAppSelector } from '@hooks/storeHooks';
import { selectHourWeather } from '@store/selectors/selectors';
import HourWeather from '@components/hourWeather';
import { StyledWeatherSlider } from '@components/weatherSlider/styled';

const WeatherSlider = (): JSX.Element | null => {
  const hourWeather = useAppSelector(selectHourWeather);

  if (hourWeather.length === 0) {
    return null;
  }

  return (
    <StyledWeatherSlider data-cy="hourly-weather-slider">
      <Carousel isRTL={false} itemsToShow={3} itemsToScroll={3}>
        {hourWeather?.map((hour) => {
          return (
            <HourWeather
              key={hour.key}
              datetime={hour.datetime}
              temp={hour.temp}
              icon={hour.icon}
            />
          );
        })}
      </Carousel>
    </StyledWeatherSlider>
  );
};

export default WeatherSlider;
