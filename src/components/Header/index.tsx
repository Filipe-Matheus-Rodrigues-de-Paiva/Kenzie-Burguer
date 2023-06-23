import { MdShoppingCart, MdLogout } from "react-icons/md";
import SearchForm from "./SearchForm";
import { StyledHeader } from "./style";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";
import { StyledContainer } from "../../styles/grid";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { ISetModal } from "../CartModal";

export default function Header({ setModal }: ISetModal) {
  const { logout, currentSale } = useContext(CartContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
          />
          <nav className="nav" role="navigation">
            <SearchForm />
            <div className="buttons">
              <button id="cart" type="button" onClick={() => setModal(true)}>
                <MdShoppingCart size={28} />
                <span>
                  {currentSale.length > 0 ? currentSale.length : null}
                </span>
              </button>
              <button type="button" onClick={() => logout()}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
}
