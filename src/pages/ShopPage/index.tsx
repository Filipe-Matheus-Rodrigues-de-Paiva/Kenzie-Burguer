import { StyledShopPage } from "./style";
import CartModal from "../../components/CartModal";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { StyledContainer } from "../../styles/grid";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

interface IModal {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ShopPage() {
  const { modal, setModal }: IModal = useContext(CartContext);

  return (
    <StyledShopPage>
      {modal ? <CartModal setModal={setModal} /> : null}
      <Header setModal={setModal} />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
}
