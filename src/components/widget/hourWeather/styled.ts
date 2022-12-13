import styled from 'styled-components';

export const StyledHourWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledTemp = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fontSize[13]}px;
  top: 0;
  @media screen and (max-width: ${({ theme }) => theme?.sizes.maxWidth[0]}px) {
    font-size: ${({ theme }) => theme?.fontSizes.fontSize[4]}px;
  }
`;

export const StyledIcon = styled.div`
  top: 50%;
  width: ${({ theme }) => theme?.sizes.width[3]}px;
`;

export const StyledTime = styled.div`
  font-size: ${({ theme }) => theme?.fontSizes.fontSize[6]}px;
  bottom: 0;
  @media screen and (max-width: ${({ theme }) => theme?.sizes.maxWidth[0]}px) {
    font-size: ${({ theme }) => theme?.fontSizes.fontSize[4]}px;
  }
`;

export const StyledImage = styled.img`
  width: ${({ theme }) => theme?.sizes.width[3]}px;
  height: ${({ theme }) => theme?.sizes.height[3]}px;
  @media screen and (max-width: ${({ theme }) => theme?.sizes.maxWidth[0]}px) {
    width: ${({ theme }) => theme?.sizes.width[1]}px;
    height: ${({ theme }) => theme?.sizes.height[0]}px;
  }
`;
