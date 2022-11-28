import { useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';

import { setEvents } from '@store/calendar/calendar.slice';
import { useAppDispatch } from '@hooks/store';
import { StyledButton } from './styled';

const LoginButton = () => {
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

  return <StyledButton onClick={handleClick()}>{isLoggedIn ? 'Sign out' : 'Sign in'}</StyledButton>;
};

export default LoginButton;
