import ReactDOM from 'react-dom';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { selectCalendar } from '@store/selectors';

import { convertDateTimeToHours } from '@helpers/convertDateTimeToHours';

import { usePortal } from '@hooks/usePortal';
import { useAppSelector } from '@hooks/storeHooks';
import { useAuth } from '@hooks/useAuth';

import Event from '@components/modals/eventsModal/event';
import LoginButton from '@components/button';

import { ForwardRef } from '@customTypes/index';

import { StyledEventsContainer, StyledModalContainer, StyledLoginEventsContainer } from './styled';

const EventsModal = forwardRef<ForwardRef>((_, forwardedRef) => {
  const [isLoggedIn, setIsLoggedIn] = useAuth();

  const events = useAppSelector(selectCalendar);

  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const elem = usePortal();

  const handleClick = () => () => {
    setIsLoggedIn();
  };

  useImperativeHandle(forwardedRef, () => ({
    closeModal: (param: boolean) => {
      setIsOpened(param);
    },
  }));

  const closeDropdown = (e: MouseEvent) => {
    if ((e.composedPath()[0] as HTMLInputElement) === containerRef.current) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeDropdown);

    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  return ReactDOM.createPortal(
    <StyledModalContainer display={isOpened ? 'flex' : 'none'} ref={containerRef}>
      <StyledLoginEventsContainer>
        <StyledEventsContainer>
          <LoginButton isLoggedIn={isLoggedIn} onHandleClick={handleClick} />
        </StyledEventsContainer>
        {events?.length > 0 ? (
          <StyledEventsContainer>
            {events.map(({ start, end, summary, iCalUID }) => {
              const eventProps = {
                timeStart: convertDateTimeToHours(start.dateTime),
                timeEnd: convertDateTimeToHours(end.dateTime),
                task: summary,
              };

              return <Event key={iCalUID} {...eventProps} />;
            })}
          </StyledEventsContainer>
        ) : (
          isLoggedIn && <StyledEventsContainer>There are no events</StyledEventsContainer>
        )}
      </StyledLoginEventsContainer>
    </StyledModalContainer>,
    elem,
  );
});

export default EventsModal;
