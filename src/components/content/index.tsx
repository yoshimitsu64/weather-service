import { useAppDispatch, useAppSelector } from '@hooks/store';
import Event from '@components/event';
import { convertDate } from '@helpers/convertDate';
import TodayWeather from '@components/todayWeather';
import { useEffect } from 'react';
import { requestWeather } from '@store/sagaActions';
import { StyledContent, StyledEventsContainer } from '@components/content/styled';

const Content = (): JSX.Element => {
  const events = useAppSelector((state) => state.calendar.events);
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
      <StyledEventsContainer>
        {events?.length > 0 &&
          events.map((event) => {
            const eventProps = {
              timeStart: convertDate(event.start.dateTime),
              timeEnd: convertDate(event.end.dateTime),
              task: event.summary,
            };

            return <Event key={event.iCalUID} {...eventProps} />;
          })}
      </StyledEventsContainer>
      <TodayWeather />
    </StyledContent>
  );
};

export default Content;
