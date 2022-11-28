import { StyledButton } from '@components/Button/styled';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { apiCalendar } from '@api/googleCalendar';
import { sign } from 'crypto';

const Button = () => {
  const [btnText, setBtnText] = useState<string>('Sign in');
  const [events, setEvents] = useState<any>(null);
  const getEvents = async () => {
    return new Promise(async (resolve, reject) => {
      if (apiCalendar.sign) {
        apiCalendar
          .listEvents({
            timeMin: new Date().toISOString(),
            showDeleted: true,
            maxResults: 10,
            orderBy: 'updated',
          })
          .then(({ result }: any) => {
            if (result.items) {
              console.log('Events From Calendar', result.items);
            } else {
              console.log('No Events');
            }

            resolve(result);
          });
      } else {
        apiCalendar.handleAuthClick();
        resolve(null);
      }
    });
  };

  return <StyledButton onClick={getEvents}>{btnText}</StyledButton>;
};

export default Button;
