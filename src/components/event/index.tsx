import { StyledEvent, StyledEventsContainer, StyledEventContainer, StyledText } from './styled';
import LoginButton from '@components/button';

interface IProps {
  timeStart: string;
  timeEnd: string;
  task: string;
}

const Event = ({ timeStart, timeEnd, task }: IProps): JSX.Element => {
  return (
    <StyledEventsContainer>
      <StyledEventContainer>
        <StyledEvent>
          {timeStart}-{timeEnd}
        </StyledEvent>
        <StyledText>{task}</StyledText>
      </StyledEventContainer>
    </StyledEventsContainer>
  );
};

export default Event;
