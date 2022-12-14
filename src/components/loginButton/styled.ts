import styled from 'styled-components';

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  font-weight: ${({ theme }) => theme.fonts.fontWeight[0]};
  width: ${({ theme }) => theme?.sizes.width[6]}px;
  padding: ${({ theme }) => theme.space.padding[0]};
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.rgbaColor[5]};
  background-color: ${({ theme }) => theme.colors.rgbaColor[0]};
  border: ${({ theme }) => theme.borders.border[1]};
  user-select: none;

  &:hover {
    color: ${({ theme }) => theme.colors.rgbaColor[0]};
    background-color: ${({ theme }) => theme.colors.rgbaColor[5]};
  }
`;
