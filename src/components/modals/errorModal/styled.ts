import styled from 'styled-components';

export const StyledErrorContainer = styled.div`
  width: ${({ theme }) => theme.sizes.width[7] + 70}px;
  height: ${({ theme }) => theme.sizes.height[5]}px;
  border-radius: ${({ theme }) => theme.borders.borderRadius[4]}px;
  background-color: ${({ theme }) => theme.colors.rgbaColor[9]};
  color: ${({ theme }) => theme.colors.rgbaColor[0]};
  display: flex;
  padding: ${({ theme }) => theme.space.padding[3]};
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.sizes.width[1] - 10}px;
`;
