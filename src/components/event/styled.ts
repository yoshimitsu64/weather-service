import styled from 'styled-components';

export const StyledEventsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: ${({ theme }) => theme?.sizes.minHeight[0]}px;
  margin-right: ${({ theme }) => theme.space.marginRight[1]}px;
  width: ${({ theme }) => theme?.sizes.width[4]}%;
`;

export const StyledEventContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow-wrap: normal;
`;

export const StyledEvent = styled.div`
  min-width: ${({ theme }) => theme?.sizes.width[5]}px;
  height: ${({ theme }) => theme?.sizes.height[0]}px;
  background-color: ${({ theme }) => theme.colors.backgroundColor[4]};
  border-radius: ${({ theme }) => theme.borders.borderRadius[5]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.color[0]};
  margin-right: ${({ theme }) => theme.space.marginRight[1]}px;
`;

export const StyledText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.fontSize[5]}px;
  min-width: ${({ theme }) => theme?.sizes.width[4]}%;
`;
