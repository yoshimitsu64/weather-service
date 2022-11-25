import styled from 'styled-components';

export const StyledLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: ${({ theme }) => theme.space.padding[0]}px;
`;
