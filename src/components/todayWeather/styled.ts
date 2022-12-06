import styled from 'styled-components';

export const StyledTodayBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 450px;
  background: linear-gradient(to right, #ec6ead, #3494e6);
  border-radius: 20px;
  padding: 20px 40px 0 40px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
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

export const StyledImage = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
`;

export const StyledDegrees = styled.div`
  font-size: 60px;
`;

export const StyledDescription = styled.span`
  margin-top: 10px;
  font-size: 25px;
`;

export const StyledCalendar = styled.span`
  margin-top: 10px;
  width: min-content;
  cursor: pointer;
`
