import { memo } from 'react';

import WeatherSlider from '@components/widget/weatherSlider';
import WidgetHeader from '@components/widget/widgetHeader';
import WeatherDescription from '@components/widget/weatherDescription';

import { StyledWidget } from './styled';

const Widget = (): JSX.Element => {
  return (
    <StyledWidget>
      <WidgetHeader />
      <WeatherDescription />
      <WeatherSlider />
    </StyledWidget>
  );
};

export default memo(Widget);
