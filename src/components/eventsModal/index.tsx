import ReactDOM from 'react-dom';
import {
  forwardRef,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { selectCalendar } from '@store/selectors/storeSelectors';
import { convertDateTimeToHours } from '@helpers/convertDateTimeToHours';
import { useAppSelector } from '@hooks/storeHooks';
import { usePortal } from '@hooks/usePortal';
import Event from '@components/event';
import LoginButton from '@components/button';
import {
  StyledEventsContainer,
  StyledModalContainer,
  StyledCross,
  StyledLoginEventsContainer,
} from '@components/eventsModal/styled';

export interface IEventsModalProps {
  display: 'none' | 'block';
}

export type ForwardRef = {
  closeModal: (param: boolean) => void;
};

const EventsModal = forwardRef<ForwardRef>((_, forwardedRef) => {
  const events = useAppSelector(selectCalendar);

  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const elem = usePortal();

  useImperativeHandle(forwardedRef, () => ({
    closeModal: (param: boolean) => {
      setIsOpened(param);
    },
  }));

  const closeModal = () => () => {
    (forwardedRef as MutableRefObject<ForwardRef>)!.current.closeModal(false);
  };

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if ((e.composedPath()[0] as HTMLInputElement) === containerRef.current) {
        setIsOpened(false);
      }
    };
    document.body.addEventListener('click', closeDropdown);

    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  return ReactDOM.createPortal(
    <StyledModalContainer display={isOpened ? 'block' : 'none'} ref={containerRef}>
      <StyledLoginEventsContainer>
        <StyledEventsContainer>
          <LoginButton />
        </StyledEventsContainer>
        {events?.length > 0 && (
          <StyledEventsContainer>
            {events.map((event) => {
              const eventProps = {
                timeStart: convertDateTimeToHours(event.start.dateTime),
                timeEnd: convertDateTimeToHours(event.end.dateTime),
                task: event.summary,
              };

              return <Event key={event.iCalUID} {...eventProps} />;
            })}
          </StyledEventsContainer>
        )}
      </StyledLoginEventsContainer>
      <StyledCross src={`${process.env.PUBLIC_URL}/SVGS/close.svg`} onClick={closeModal()} />
    </StyledModalContainer>,
    elem,
  );
});

export default EventsModal;
