import styled from 'styled-components';

export const StyledWeather = styled.div`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme?.sizes.height[4]}%;
  width: ${({ theme }) => theme?.sizes.width[4]}%;
  justify-content: space-between;
`;
