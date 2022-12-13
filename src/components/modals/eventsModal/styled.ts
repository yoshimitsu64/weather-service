import styled from 'styled-components';

import { IEventsModalProps } from '@customTypes/index';

export const StyledModalContainer = styled.div<IEventsModalProps>`
  display: ${({ display }) => display};
  position: fixed;
  width: ${({ theme }) => theme?.sizes.width[4]}vw;
  height: ${({ theme }) => theme?.sizes.height[4]}vh;
  top: 0;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.rgbaColor[10]};
  cursor: pointer;
`;

export const StyledEventsContainer = styled.div`
  border-radius: ${({ theme }) => theme.borders.borderRadius[4]}px;
  width: ${({ theme }) => theme?.sizes.width[10]}px;
  align-items: center;
  overflow: auto;
  display: flex;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space.marginRight[2]}px;
  padding: ${({ theme }) => theme.space.padding[3]};
  background: ${({ theme }) => theme.colors.gradient[0]};
  cursor: auto;
  margin-bottom: ${({ theme }) => theme.space.marginBottom[1]}px;
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
`;
