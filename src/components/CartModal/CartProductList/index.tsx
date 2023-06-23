import CartProductCard from "./CartProductCard";
import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext";
import { toast } from "react-toastify";

export default function CartProductList() {
  const { currentSale, cartTotal, setModal, setCurrentSale } =
    useContext(CartContext);

  const removeAllProducts = () => {
    setCurrentSale([]);
    setModal(false);
    toast.success("Compra cancelada", {
      autoClose: 2000,
    });
  };

  return (
    <StyledCartProductList>
      <ul>
        {currentSale?.map((product: any) => {
          return <CartProductCard key={product.id} product={product} />;
        })}
      </ul>

      <div className="totalBox">
        <StyledParagraph>
          {currentSale.length > 0 ? <strong>Total</strong> : null}
        </StyledParagraph>
        <StyledParagraph className="total">
          {currentSale.length > 0 ? cartTotal : null}
        </StyledParagraph>
      </div>
      {currentSale.length > 0 ? (
        <StyledButton
          $buttonSize="default"
          $buttonStyle="gray"
          onClick={() => removeAllProducts()}
        >
          Remover todos
        </StyledButton>
      ) : null}
    </StyledCartProductList>
  );
}
