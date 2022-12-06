import styled from 'styled-components';

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  justify-content: center;
`;

export const StyledEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-right: 50px;
  padding: 20px;
  background: linear-gradient(to right, #ec6ead, #3494e6);
`;

export const StyledLoginPanelContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;
