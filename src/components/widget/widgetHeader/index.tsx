import TodayDate from '@components/widget/date';
import SearchBar from '@components/searchBar';
import ButtonOptions from '@components/buttonOptions';
import { StyledHeader } from '@components/widget/widgetHeader/styled';

const WidgetHeader = (): JSX.Element => {
  return (
    <StyledHeader>
      <TodayDate />
      <SearchBar />
      <ButtonOptions />
    </StyledHeader>
  );
};

export default WidgetHeader;
