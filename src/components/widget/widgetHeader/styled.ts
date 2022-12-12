import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${({ theme }) => theme?.sizes.maxWidth[3]}px) {
    flex-wrap: wrap;
  }
`;
