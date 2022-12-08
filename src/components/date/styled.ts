import styled from 'styled-components';

export const StyledDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

export const StyledHours = styled.div`
  font-size: ${({ theme }) => theme?.fontSizes.fontSize[6]}px;
`;

export const StyledDate = styled.div`
  font-size: ${({ theme }) => theme?.fontSizes.fontSize[5]}px;
`;
