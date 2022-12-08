import styled from 'styled-components';

export const StyledFooter = styled.div`
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
  background: linear-gradient(to right, #ec6ead, #3494e6);
`;

export const StyledWeatherContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme?.sizes.width[4]}%;
  justify-content: space-between;
`;
