import WeatherSlider from '@components/weatherSlider';
import WidgetHeader from '@components/widget/widgetHeader';
import WeatherDescription from '@components/widget/weatherDescription';

import { StyledWidget } from '@components/widget/styled';
import { useAppSelector } from '@hooks/storeHooks';
import { selectHourWeather } from '@store/selectors/selectors';

const Widget = (): JSX.Element => {
  const hourWeather = useAppSelector(selectHourWeather);

  return (
    <StyledWidget>
      <WidgetHeader />
      <WeatherDescription />
      <WeatherSlider hourWeather={hourWeather} />
    </StyledWidget>
  );
};

export default Widget;
