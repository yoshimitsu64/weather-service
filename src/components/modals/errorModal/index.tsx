import { useEffect, useState, memo } from 'react';

import { StyledModalContainer } from '@components/modals/eventsModal/styled';

import { useAppSelector } from '@hooks/storeHooks';

import { selectError } from '@store/selectors/selectError';

import { StyledErrorContainer } from './styled';

const ErrorModal = (): JSX.Element | null => {
  const openCageError = useAppSelector(selectError);

  const [isClosed, setIsClosed] = useState<boolean>(true);

  const handleClick = () => () => {
    setIsClosed(true);
  };

  useEffect(() => {
    openCageError && setIsClosed(false);
  }, []);

  if (isClosed) {
    return null;
  }

  return (
    <StyledModalContainer display={openCageError ? 'flex' : 'none'} onClick={handleClick()}>
      <StyledErrorContainer>{openCageError}</StyledErrorContainer>
    </StyledModalContainer>
  );
};

export default memo(ErrorModal);
