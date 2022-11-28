import DayDate from '@components/date';
import Location from '@components/location';
import { StyledHeader } from './styled';

const Header = () => {
  return (
    <StyledHeader>
      <DayDate />
      <Location />
    </StyledHeader>
  );
};
export default Header;
