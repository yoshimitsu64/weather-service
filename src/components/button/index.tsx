import { StyledButton } from '@components/button/styled';

interface IProps {
  onHandleClick: () => () => void;
  isLoggedIn: boolean;
}

const LoginButton = ({ onHandleClick, isLoggedIn }: IProps): JSX.Element => {
  return (
    <StyledButton onClick={onHandleClick()}>
      {isLoggedIn ? 'Sign out' : 'Sign in google'}
    </StyledButton>
  );
};

export default LoginButton;
