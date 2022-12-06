import styled from 'styled-components';

interface IProps {
  image: string;
}

export const StyledLayout = styled.div<IProps>`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  image-resolution: from-image 300dpi;
  position: fixed;
  pointer-events: none;
`;
