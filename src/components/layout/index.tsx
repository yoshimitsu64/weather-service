import { StyledLayout } from './styled';

interface ILayoutProps {
  children: JSX.Element[];
}

const Layout = ({ children }: ILayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
