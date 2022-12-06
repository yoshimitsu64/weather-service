import Input from '@components/input';
import { StyledCity, StyledCityContainer, StyledCountry } from './styled';
import { useAppSelector } from '@hooks/store';

const Location = (): JSX.Element => {
  const location = useAppSelector((state) => state.openCage.geolocation!?.components);

  return (
    <StyledCityContainer>
      <StyledCity>{location?.city}</StyledCity>
      <StyledCountry>{location?.country}</StyledCountry>
      <Input />
    </StyledCityContainer>
  );
};

export default Location;
