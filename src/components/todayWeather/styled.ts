import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 200px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  border-radius: 20px;
  padding: 20px 20px 0 20px;
  margin-top: 50px;
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
