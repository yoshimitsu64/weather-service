import { useAppSelector } from '@hooks/storeHooks';

import { selectImageSrc } from '@store/selectors/selectImageSrc';

import { StyledLayout } from './styled';

interface ILayoutProps {
  children: JSX.Element[];
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  const imageSrc = useAppSelector(selectImageSrc);

  return <StyledLayout image={imageSrc}>{children}</StyledLayout>;
};

export default Layout;
