import { useAppSelector } from '@hooks/store';
import LoginButton from '@components/button';
import Event from '@components/event';
import { convertDate } from '@helpers/convertDate';
import TodayWeather from '@components/todayWeather';
import { StyledContent, StyledEventsContainer, StyledLoginPanelContainer } from './styled';

const Content = (): JSX.Element => {
  const events = useAppSelector((state) => state.calendar.events);

  return (
    <StyledContent>
      <StyledLoginPanelContainer>
        <LoginButton />
      </StyledLoginPanelContainer>
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
