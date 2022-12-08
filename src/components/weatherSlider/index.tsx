import Carousel from 'react-elastic-carousel';

import { useAppSelector } from '@hooks/storeHooks';
import { StyledWeatherSlider } from '@components/weatherSlider/styled';
import { selectHourWeather } from '@store/selectors/selectors';
import HourWeather from '@components/hourWeather';

const WeatherSlider = (): JSX.Element => {
  const hourWeather = useAppSelector(selectHourWeather);

  return (
    <StyledWeatherSlider>
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
