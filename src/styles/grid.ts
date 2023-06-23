import styled from 'styled-components';

interface IStyledContainerProps {
  containerWidth?: number;
}

export const StyledContainer = styled.div<IStyledContainerProps>`
  width: 100%;
  max-width: ${({ containerWidth }) =>
    containerWidth ? containerWidth : 1000}px;
  margin: 0 auto;
  padding: 10px;

  .buttons {
    #cart {
      position: relative;

      span {
        position: absolute;
        left: 20px;
        color: white;
        font-weight: 700;
        border-radius: 10px;
        width: 15px;
        background-color: rgb(39, 174, 96);
      }
    }
  }
`;

export const StyledGridBox = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray0};
  border-radius: 5px;
`;
