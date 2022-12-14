import { memo } from 'react';

import { StyledButton } from '@components/loginButton/styled';

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

export default memo(LoginButton);
