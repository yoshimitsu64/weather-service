import TodayDate from '@components/widget/date';
import Input from '@components/input';
import ButtonOptions from '@components/buttonOptions';
import { StyledHeader } from '@components/widget/widgetHeader/styled';

const WidgetHeader = (): JSX.Element => {
  return (
    <StyledHeader>
      <TodayDate />
      <Input />
      <ButtonOptions />
    </StyledHeader>
  );
};

export default WidgetHeader;
