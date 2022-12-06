import styled from 'styled-components';
import { IEventsModalProps } from '@components/eventsModal/index';

export const StyledEventsContainer = styled.div<IEventsModalProps>`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 250px;
  align-items: center;
  overflow: auto;
  margin-right: 50px;
  padding: 20px;
  background: linear-gradient(to right, #ec6ead, #3494e6);
  position: fixed;
  top: ${({ coordinates }) => coordinates.y - 90}px;
  left: ${({ coordinates }) => coordinates.x - 300}px;
  display: ${({display}) => display};
`;
