import styled from 'styled-components';

export const StyledEventsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
`;

export const StyledEventContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledEvent = styled.div`
  width: 110px;
  height: 40px;
  background-color: rgba(64, 0, 130, 0.8);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 30px;
`;
