import styled from "styled-components";

export const StyledCartProductList = styled.div`
   display: flex;
   flex-direction: column;

   ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: 200px;
      overflow: auto;
   }

  ul::-webkit-scrollbar {
    width: 6px;
    background-color: #fff;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: rgb(39, 174, 96);
    border-radius: 10px;
  }

   .totalBox {
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      .total {
         font-weight: 700;
         color: ${({ theme }) => theme.colors.gray300};
      }
   }
`;
