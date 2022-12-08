import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.color[1]};
  position: relative;
`;

export const StyledInput = styled.input`
  width: ${({ theme }) => theme?.sizes.width[4]}%;
  font-size: ${({ theme }) => theme?.fontSizes.fontSize[3]}px;
  text-decoration-line: none;
  background: none;
  border: ${({ theme }) => theme.borders.border[2]};
  outline: none;
  border-bottom: ${({ theme }) => theme.borders.borderBottom[0]};
  font-size: ${({ theme }) => theme?.fontSizes.fontSize[6]}px;
`;

export const StyledDropDownContainer = styled.div`
  position: relative;
`;

export const StyledDropDown = styled.ul`
  list-style-type: none;
  border: ${({ theme }) => theme.borders.border[3]};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.backgroundColor[0]};
  width: ${({ theme }) => theme?.sizes.width[4]}%;
  z-index: ${({ theme }) => theme.zIndices.zIndex[0]};
`;

export const StyledListItem = styled.li`
  font-size: ${({ theme }) => theme?.fontSizes.fontSize[4]}px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundColor[5]};
    cursor: pointer;
  }
`;
