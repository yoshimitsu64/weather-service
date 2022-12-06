import styled from 'styled-components';

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

export const StyledButton = styled.button`
  background-color: #272343;
  width: 200px;
  font-size: 23px;
  display: flex;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  justify-content: space-between;
  padding: 0 5px 0 5px;

  &:active {
    transform: scale(0.97);
  }
`;

export const StyledOptionsContainer = styled.div`
  position: relative;
  color: white;
`;

export const StyledOptions = styled.ul`
  margin-top: 5px;
  border-radius: 10px;
  background-color: #272343;
  list-style-type: none;
  position: absolute;
  width: 100%;
  
`;

export const StyledOption = styled.li`
  font-size: 21px;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 5px;

  border-radius: inherit;

  &:hover {
    background-color: #407088;
    cursor: pointer;
  }
`;
