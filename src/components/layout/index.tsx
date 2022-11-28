import { ILayoutProps } from '@interfaces/ILayoutProps';
import { StyledLayout } from './styled';

const Layout = ({ children }: ILayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
