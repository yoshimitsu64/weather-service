import ReactDOM from 'react-dom';

import { memo } from 'react';

import { Watch } from 'react-loader-spinner';

import { useAppSelector } from '@hooks/storeHooks';
import { usePortal } from '@hooks/usePortal';

import { StyledModalContainer } from '@components/modals/eventsModal/styled';

const Spinner = () => {
  const elem = usePortal();

  const isLoading = useAppSelector((state) => state.openCage.isLoading);

  if (!isLoading) {
    return null;
  }
  return ReactDOM.createPortal(
    <StyledModalContainer display={isLoading ? 'flex' : 'none'}>
      <Watch height="80" width="80" radius="48" color="#4fa94d" ariaLabel="watch-loading" />
    </StyledModalContainer>,
    elem,
  );
};

export default memo(Spinner);
