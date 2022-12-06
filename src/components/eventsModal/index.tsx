import ReactDOM from 'react-dom';

import { StyledEventsContainer } from '@components/eventsModal/styled';
import { convertDate } from '@helpers/convertDate';
import Event from '@components/event';
import { useAppSelector } from '@hooks/store';
import LoginButton from '@components/button';
import { usePortal } from '@hooks/usePortal';

export interface IEventsModalProps {
  coordinates: { x: number; y: number };
  display: 'block' | 'none';
}

const EventsModal = ({ coordinates, display }: IEventsModalProps): JSX.Element => {
  const events = useAppSelector((state) => state.calendar.events);

  const elem = usePortal();

  return ReactDOM.createPortal(
    <>
      <StyledEventsContainer coordinates={coordinates} display={display}>
        <LoginButton />
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
    </>,
    elem,
  );
};

export default EventsModal;
