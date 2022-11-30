import { StyledEvent, StyledEventsContainer, StyledEventContainer } from './styled';

interface IProps {
  timeStart: string;
  timeEnd: string;
  task: string;
}

const Event = ({ timeStart, timeEnd, task }: IProps) : JSX.Element => {
  return (
    <StyledEventsContainer>
      <StyledEventContainer>
        <StyledEvent>
          {timeStart}-{timeEnd}
        </StyledEvent>
        <div>{task}</div>
      </StyledEventContainer>
    </StyledEventsContainer>
  );
};

export default Event;
