import { useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';

import { setEvents } from '@store/calendar/calendar.slice';
import { useAppDispatch } from '@hooks/storeHooks';
import { StyledButton } from '@components/button/styled';

const LoginButton = (): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleClick = () => () => {
    if (!isLoggedIn) {
      ApiCalendar.handleAuthClick().then(() => {
        ApiCalendar.listEvents({
          timeMin: new Date().toISOString(),
          showDeleted: false,
          maxResults: 4,
          orderBy: 'updated',
        }).then(({ result }: any) => {
          setIsLoggedIn(true);
          dispatch(setEvents(result.items));
        });
      });
    } else {
      ApiCalendar.handleSignoutClick();
      setIsLoggedIn(false);
      dispatch(setEvents([]));
    }
  };

  return (
    <StyledButton onClick={handleClick()}>
      {isLoggedIn ? 'Sign out' : 'Sign in google'}
    </StyledButton>
  );
};

export default LoginButton;
