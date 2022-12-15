import styled from 'styled-components';
import { backGroundImages } from '@constants/backGroundImages';

interface IProps {
  image: {
    img: string;
  };
}

export const StyledLayout = styled.div<IProps>`
  position: relative;
  width: ${({ theme }) => theme.sizes.width[4]}vw;
  height: ${({ theme }) => theme?.sizes.height[4]}vh;
  background-image: url(${backGroundImages.clear});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledBackImage = styled.img<IProps>`
  position: absolute;
  width: ${({ theme }) => theme.sizes.width[4]}vw;
  height: ${({ theme }) => theme?.sizes.height[4]}vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1111;
`;
