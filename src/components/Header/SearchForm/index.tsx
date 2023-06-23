import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cartContext";

export default function SearchForm() {
  const { showProducts, searchItem, setSearchItem } = useContext(CartContext);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    showProducts(searchItem.toLowerCase().trim());
  };
  return (
    <StyledSearchForm onSubmit={submit}>
      <input
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        placeholder="Digitar pesquisa"
      />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
}
