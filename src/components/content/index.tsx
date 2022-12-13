import { useGeolocation } from '@hooks/useGeolocation';

import Widget from '@components/widget';
import Spinner from '@components/spinner';
import ErrorModal from '@components/modals/errorModal';

import { StyledContent } from './styled';

const Content = (): JSX.Element => {
  useGeolocation();

  return (
    <StyledContent>
      <Widget />
      <Spinner />
      <ErrorModal />
    </StyledContent>
  );
};

export default Content;
