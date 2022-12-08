import styled from 'styled-components';

export const StyledTodayBox = styled.div`
  margin-top: ${({ theme }) => theme.space.marginTop[4]}px;
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme?.sizes.width[9]}px;
  height: ${({ theme }) => theme?.sizes.height[7]}px;
  background: linear-gradient(to right, #ec6ead, #3494e6);
  border-radius: ${({ theme }) => theme.borders.borderRadius[4]}px;
  padding: ${({ theme }) => theme.space.padding[2]};
  overflow: auto;

  @media screen and (max-height: ${({ theme }) => theme?.sizes.maxHeight[1]}px) {
    margin-top: 0;
  }

  & {
    --scrollbarBG: #cfd8dc;
    --thumbBG: #90a4ae;
  }

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme?.sizes.width[0]}px;
  }

  & {
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }

  &::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: ${({ theme }) => theme.borders.borderRadius[2]}px;
    border: ${({ theme }) => theme.borders.border[0]};
  }

  @media screen and (max-width: ${({ theme }) => theme?.sizes.maxWidth[3]}px) {
    width: ${({ theme }) => theme?.sizes.width[8]}px;
  }
  @media screen and (max-height: ${({ theme }) => theme?.sizes.minHeight[0]}px) {
    height: ${({ theme }) => theme.sizes.height[7] - 50}px;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${({ theme }) => theme?.sizes.maxWidth[3]}px) {
    flex-wrap: wrap;
  }
`;

export const StyledTodayWeatherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  width: ${({ theme }) => theme?.sizes.width[3]}px;
  display: flex;
`;

export const StyledDegrees = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fontSize[16]}px;
`;

export const StyledDescription = styled.span`
  margin-top: ${({ theme }) => theme.space.marginTop[2]}px;
  font-size: ${({ theme }) => theme.fontSizes.fontSize[10]}px;
`;

export const StyledCalendar = styled.span`
  margin-top: ${({ theme }) => theme.space.marginTop[2]}px;
  pointer-events: all;
  width: min-content;
  cursor: pointer;
`;

export const StyledCalendarImage = styled.img`
  width: ${({ theme }) => theme.sizes.width[1]}px;
  height: ${({ theme }) => theme.sizes.height[0]}px;
`;
