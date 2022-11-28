import styled from 'styled-components';
import { StyledDateContainer } from '@components/date/styled';

export const StyledCityContainer = styled(StyledDateContainer)`
  justify-content: flex-end;
`;
export const StyledCity = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fontSize[5]}px;
`;

export const StyledCountry = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fontSize[4]}px;
`;
