import { MdClose } from "react-icons/md";
import CartProductList from "./CartProductList";
import { StyledCartModalBox } from "./style";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

export interface ISetModal {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CartModal({ setModal }: ISetModal) {
  const { currentSale } = useContext(CartContext);

  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag="h2" $fontSize="three">
            Carrinho de compras
          </StyledTitle>
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => {
              setModal(false);
            }}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className="cartBox">
          <CartProductList />

          <div className={currentSale.length > 0 ? "invisible" : "emptyBox"}>
            <StyledTitle tag="h3" $fontSize="three" textAlign="center">
              Sua sacola está vazia
            </StyledTitle>
            <StyledParagraph textAlign="center">Adicione itens</StyledParagraph>
          </div>
        </div>
      </dialog>
    </StyledCartModalBox>
  );
}
