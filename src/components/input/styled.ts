import styled, { keyframes } from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: black;
`;

export const StyledInput = styled.input`
  width: ${({ theme }) => theme.sizes.width[0]}px;
  font-size: ${({ theme }) => theme.fontSizes.fontSize[3]}px;
  text-decoration-line: none;
  background: none;
  border: none transparent;
  outline: none;
  border-bottom: 1px solid black;
  font-size: 24px;
`;

export const StyledDropDownContainer = styled.div`
  position: relative;
`;

export const StyledDropDown = styled.ul`
  list-style-type: none;
  border: 1px solid black;
  position: absolute;
  background-color: white;
  width: 100%;
  z-index: 99999;
`;

export const StyledListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.fontSize[4]}px;

  &:hover {
    background-color: slategray;
    cursor: pointer;
  }
`;
