import { StyledHeader } from './styled';
import DayDate from '@components/date';
import Location from '@components/location';

const Header = () => {
  return (
    <StyledHeader>
      <DayDate />
      <Location />
    </StyledHeader>
  );
};
export default Header;
