import Carousel from 'react-elastic-carousel';
import HourWeather from '@components/hourWeather';
import { useAppSelector } from '@hooks/store';
import { StyledWeatherSlider } from '@components/weatherSlider/styled';
import { selectHourWeather } from '@store/selectors';

const WeatherSlider = (): JSX.Element => {
  const hourWeather = useAppSelector(selectHourWeather);

  return (
    <StyledWeatherSlider>
      <Carousel isRTL={false} itemsToShow={3} itemsToScroll={3}>
        {hourWeather!?.map((hour) => {
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
