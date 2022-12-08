import styled from 'styled-components';

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  width: ${({ theme }) => theme?.sizes.width[4]}%;
  justify-content: center;
`;
