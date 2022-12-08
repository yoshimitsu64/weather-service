import styled from 'styled-components';

interface IProps {
  image: string;
}

export const StyledLayout = styled.div<IProps>`
  position: relative;
  width: ${({ theme }) => theme.sizes.width[4]}vw;
  height: ${({ theme }) => theme?.sizes.height[4]}vh;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
