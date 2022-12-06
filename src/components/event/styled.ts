import styled from 'styled-components';

export const StyledEventsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  margin-right: 30px;
  width: 100%;
`;

export const StyledEventContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow-wrap: normal;
`;

export const StyledEvent = styled.div`
  min-width: 110px;
  height: 40px;
  background-color: rgba(64, 0, 130);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 30px;
`;

export const StyledText = styled.div`
  font-size: 28px;
  min-width: 100%;
`;
