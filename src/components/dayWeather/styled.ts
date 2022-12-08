import styled from 'styled-components';

export const StyledDayWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.color[0]};
`;

export const StyledImage = styled.img`
  width: ${({ theme }) => theme?.sizes.width[4]}px;
  @media screen and (max-width: ${({ theme }) => theme?.sizes.maxWidth[3]}px) {
    width: ${({ theme }) => theme?.sizes.width[2]}px;
    height: ${({ theme }) => theme?.sizes.height[2]}px;
  }

  @media screen and (max-width: ${({ theme }) => theme?.sizes.maxWidth[1]}px) {
    width: ${({ theme }) => theme?.sizes.width[1]}px;
    height: ${({ theme }) => theme?.sizes.height[0]}px;
  }
`;

export const StyledDay = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fontSize[5]}px;
  @media screen and (max-width: ${({ theme }) => theme?.sizes.maxWidth[2]}px) {
    font-size: ${({ theme }) => theme?.fontSizes.fontSize[3]}px;
  }
`;

export const StyledTemperature = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fontSize[12]}px;
`;
