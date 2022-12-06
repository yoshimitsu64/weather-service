import { useAppDispatch, useAppSelector } from '@hooks/store';
import TodayWeather from '@components/todayWeather';
import { useEffect } from 'react';
import { requestWeather } from '@store/sagaActions';
import { StyledContent } from '@components/content/styled';

const Content = (): JSX.Element => {
  const geolocation = useAppSelector((state) => state.openCage.geolocation);

  const dispatch = useAppDispatch();

  useEffect(() => {
    !geolocation &&
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
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
