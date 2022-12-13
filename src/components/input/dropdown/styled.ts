import styled from 'styled-components';

export const StyledDropDownContainer = styled.div`
  position: relative;
`;

export const StyledDropDown = styled.ul`
  list-style-type: none;
  border: ${({ theme }) => theme.borders.border[3]};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.rgbaColor[9]};
  width: ${({ theme }) => theme?.sizes.width[4]}%;
  margin-top: ${({ theme }) => theme.space.marginTop[1]}px;
  z-index: ${({ theme }) => theme.zIndices.zIndex[0]};
  border-radius: ${({ theme }) => theme.borders.borderRadius[2]}px;
  color: ${({ theme }) => theme.colors.rgbaColor[0]};
`;

export const StyledListItem = styled.li`
  font-size: ${({ theme }) => theme?.fontSizes.fontSize[4]}px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.rgbaColor[1]};
    cursor: pointer;
  }
`;
