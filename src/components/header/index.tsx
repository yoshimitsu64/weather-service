import { StyledHeader, StyledDateContainer, StyledDate, StyledHours } from './styled';
import { useEffect, useState } from 'react';
import { days, months } from '../../constants/date';

const Header = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      date.getMinutes() !== time.getMinutes() && setTime(date);
    }, 1000);
  }, []);

  return (
    <StyledHeader>
      <StyledDateContainer>
        <StyledHours>
          {time.getHours()}:{time.getMinutes()}
        </StyledHours>
        <StyledDate>
          {`${days[time.getDay()]} ${time.getDay()}, ${
            months[time.getMonth()]
          }, ${time.getFullYear()}`}
        </StyledDate>
      </StyledDateContainer>
    </StyledHeader>
  );
};
export default Header;
