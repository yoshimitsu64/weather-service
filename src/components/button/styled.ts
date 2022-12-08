import styled from 'styled-components';

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  font-weight: 600;
  width: ${({ theme }) => theme?.sizes.width[6]}px;
  padding: ${({ theme }) => theme.space.padding[0]};
  box-shadow: 0 0 20px rgba(${({ theme }) => theme.colors.rgbaColor[1]});
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.backgroundColor[4]};
  background-color: ${({ theme }) => theme.colors.backgroundColor[0]};
  border: ${({ theme }) => theme.borders.border[1]};
  user-select: none;

  &:hover {
    color: ${({ theme }) => theme.colors.color[0]};
    background-color: ${({ theme }) => theme.colors.backgroundColor[4]};
  }
`;
