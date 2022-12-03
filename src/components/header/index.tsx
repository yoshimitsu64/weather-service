import DayDate from '@components/date';
import Location from '@components/location';
import { StyledHeader } from './styled';

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <DayDate />
      <Location />
    </StyledHeader>
  );
};
export default Header;
