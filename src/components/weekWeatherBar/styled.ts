import styled from 'styled-components';

export const StyledWeatherBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ theme }) => theme?.sizes.width[4]}%;
  height: ${({ theme }) => theme?.sizes.height[6]}px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(${({ theme }) => theme.colors.rgbaColor[2]});
  @media screen and (max-width: ${({ theme }) => theme?.sizes.maxWidth[3]}px) {
    height: ${({ theme }) => theme?.sizes.height[5]}px;
  }
  background: ${({ theme }) => theme.colors.rgbaColor[10]};
`;

export const StyledWeatherBar = styled.div`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme?.sizes.width[4]}%;
  justify-content: space-between;
`;

export const StyledWeather = styled.div`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme?.sizes.height[4]}%;
  width: ${({ theme }) => theme?.sizes.width[4]}%;
  justify-content: space-between;
`;
