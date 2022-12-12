import styled from 'styled-components';

export const StyledWeatherDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
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
