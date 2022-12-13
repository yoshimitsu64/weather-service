import styled from 'styled-components';

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.rgbaColor[2]};
  width: ${({ theme }) => theme?.sizes.width[6]}px;
  font-size: ${({ theme }) => theme.fontSizes.fontSize[8]}px;
  display: flex;
  color: ${({ theme }) => theme.colors.rgbaColor[0]};
  border-radius: ${({ theme }) => theme.borders.borderRadius[1]}px;
  cursor: pointer;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.padding[1]};

  &:active {
    transform: scale(0.97);
  }
`;

export const StyledOptionsContainer = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.rgbaColor[0]};
`;

export const StyledOptions = styled.ul`
  margin-top: ${({ theme }) => theme.space.marginTop[1]}px;
  border-radius: ${({ theme }) => theme.borders.borderRadius[3]}px;
  background-color: ${({ theme }) => theme.colors.rgbaColor[2]};
  list-style-type: none;
  position: absolute;
  width: ${({ theme }) => theme?.sizes.width[4]}%;
`;

export const StyledOption = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.fontSize[6]}px;
  margin-right: ${({ theme }) => theme.space.marginRight[0]}px;
  margin-left: ${({ theme }) => theme.space.marginLeft[0]}px;
  margin-bottom: ${({ theme }) => theme.space.marginBottom[0]}px;

  border-radius: inherit;

  &:hover {
    background-color: ${({ theme }) => theme.colors.rgbaColor[1]};
    cursor: pointer;
  }
`;
