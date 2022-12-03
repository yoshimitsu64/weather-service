import styled from 'styled-components';

export const StyledTodayBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 350px;
  background: #3494E6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #EC6EAD, #3494E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 20px;
  padding: 20px 20px 0 20px;
  margin-top: 20px;
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
