import { useEffect, useState, memo } from 'react';

import { StyledModalContainer } from '@components/modals/eventsModal/styled';

import { useAppSelector } from '@hooks/storeHooks';

import { selectError } from '@store/selectors';

import { StyledErrorContainer } from './styled';

const ErrorModal = (): JSX.Element | null => {
  const error = useAppSelector(selectError);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClick = () => () => {
    setIsVisible(false);
  };

  useEffect(() => {
    error && setIsVisible(true);
  }, [error]);

  if (!isVisible) {
    return null;
  }

  return (
    <StyledModalContainer display={error ? 'flex' : 'none'} onClick={handleClick()}>
      <StyledErrorContainer>{error && 'Something went wrong...'}</StyledErrorContainer>
    </StyledModalContainer>
  );
};

export default memo(ErrorModal);
