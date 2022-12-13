import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.rgbaColor[9]};
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
