import styled from 'styled-components';

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  font-weight: 600;
  margin: 0 10px;
  width: 200px;
  padding: 10px 0;
  box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
  transition: 0.4s;
  color: rgb(104, 85, 224);
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(104, 85, 224, 1);

  &:hover {
    color: white;
    box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
    background-color: rgba(104, 85, 224, 1);
  }
`;
