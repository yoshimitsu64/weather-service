import styled from 'styled-components';
import { IEventsModalProps } from '@components/eventsModal/index';

export const StyledModalContainer = styled.div<IEventsModalProps>`
  display: ${({ display }) => display};
  position: fixed;
  width: ${({ theme }) => theme?.sizes.width[4]}vw;
  height: ${({ theme }) => theme?.sizes.height[4]}vh;
  top: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const StyledEventsContainer = styled.div`
  border-radius: ${({ theme }) => theme.borders.borderRadius[4]}px;
  width: ${({ theme }) => theme?.sizes.width[7]}px;
  top: 50%;
  left: 50%;
  position: relative;
  transform: translate(-50%, -50%);
  align-items: center;
  overflow: auto;
  margin-right: ${({ theme }) => theme.space.marginRight[2]}px;
  padding: ${({ theme }) => theme.space.padding[3]};
  background: linear-gradient(to right, #ec6ead, #3494e6);
  cursor: auto;
`;

export const StyledCross = styled.img`
  width: ${({ theme }) => theme?.sizes.width[4]}px;
  height: ${({ theme }) => theme?.sizes.height[4]}px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledLoginEventsContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ theme }) => theme.sizes.height[8]}px;
`;
