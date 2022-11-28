import { StyledEvent } from '@components/event/styled';

interface IProps {
  text: string;
}

const Event = ({ text }: IProps) => {
  return <StyledEvent>{text}</StyledEvent>;
};

export default Event;
