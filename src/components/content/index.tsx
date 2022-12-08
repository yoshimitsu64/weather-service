import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import TodayWeather from '@components/todayWeather';
import { requestWeather } from '@store/actions';
import { StyledContent } from '@components/content/styled';
import { selectOpenCage } from '@store/selectors/storeSelectors';

const Content = (): JSX.Element => {
  const geolocation = useAppSelector(selectOpenCage);

  const dispatch = useAppDispatch();

  useEffect(() => {
    !geolocation &&
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(requestWeather(position.coords.latitude, position.coords.longitude));
      });
  }, []);

  return (
    <StyledContent>
      <TodayWeather />
    </StyledContent>
  );
};

export default Content;
