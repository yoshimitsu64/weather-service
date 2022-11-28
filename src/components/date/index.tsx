import { StyledDateContainer, StyledDate, StyledHours } from './styled';
import { days, months } from '@constants/date';
import { useEffect, useState } from 'react';

interface IDate {
  time: Date;
}

const DayDate = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timeChange = setInterval(() => {
      const date = new Date();
      date.getMinutes() !== time.getMinutes() && setTime(date);
    }, 1000);

    return () => clearInterval(timeChange);
  }, []);

  return (
    <StyledDateContainer>
      <StyledHours>
        {time.getHours()}:{time.getMinutes()}
      </StyledHours>
      <StyledDate>
        {`${days[time.getDay()]}, ${
          months[time.getMonth()]
        } ${time.getDate()}, ${time.getFullYear()}`}
      </StyledDate>
    </StyledDateContainer>
  );
};

export default DayDate;
