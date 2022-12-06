import { StyledLayout, StyledImage } from './styled';
import { useAppSelector } from '@hooks/store';
import { useEffect, useState } from 'react';
import {
  setOpenWeatherBackgroundImage,
  setVisualCrossingBackgroundImage,
} from '@helpers/setBackgroundImage';
import { selectImageSrc } from '@store/selectors';

interface ILayoutProps {
  children: JSX.Element[];
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  const imageSrc = useAppSelector(selectImageSrc);

  return <StyledLayout image={imageSrc}>{children}</StyledLayout>;
};

export default Layout;
