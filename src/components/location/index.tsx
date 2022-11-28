import Input from '@components/input';
import { StyledCity, StyledCityContainer, StyledCountry } from './styled';

const Location = () => {
  return (
    <StyledCityContainer>
      <StyledCity>Mogilev</StyledCity>
      <StyledCountry>Belarus</StyledCountry>
      <Input />
    </StyledCityContainer>
  );
};

export default Location;
