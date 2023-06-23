import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import ProductCard from "./ProductCard";
import { StyledContainer, StyledProductList } from "./style";

export default function ProductList() {
  const {
    productsList,
    cleanSearch,
    filteredProducts,
    searchItem,
    noResultSearch,
  } = useContext(CartContext);
  const currentMapList =
    filteredProducts.length > 0 ? filteredProducts : productsList;

  return (
    <>
      {filteredProducts.length > 0 ? (
        <StyledContainer>
          <h1>Resultados da busca: {searchItem}</h1>
          <button onClick={() => cleanSearch()}>Limpar a busca</button>
        </StyledContainer>
      ) : null}
      {noResultSearch !== "" ? (
        <StyledContainer>
          <h1>{noResultSearch}</h1>
          <button onClick={() => cleanSearch()}>Limpar a busca</button>
        </StyledContainer>
      ) : (
        <StyledProductList>
          {currentMapList?.map((product) => {
            return <ProductCard key={String(product.id)} product={product} />;
          })}
        </StyledProductList>
      )}
    </>
  );
}
