import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface IChildren {
  children: React.ReactNode;
}

export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface ICartContext {
  logout: () => void;
  productsList: IProducts[];
  currentSale: any;
  addToCart: (productId: number) => void;
  removeProduct: (productId: number) => void;
  cartTotal: number;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentSale: React.Dispatch<any>;
  filteredProducts: IProducts[];
  searchItem: string;
  setSearchItem: React.Dispatch<React.SetStateAction<string>>;
  showProducts: (searchitem: string) => void;
  cleanSearch: () => void;
  noResultSearch: string;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [productsList, setProductsList] = useState<IProducts[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    async function getAllItems() {
      try {
        const response = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductsList(response.data);
      } catch (error) {}
    }

    getAllItems();
  }, []);

  const [filteredProducts, setFilteredProducts] = useState<IProducts[]>([]);
  const [searchItem, setSearchItem] = useState("");
  const [noResultSearch, setNoResultSearch] = useState("");

  const showProducts = (searchitem: string) => {
    const productsFound = productsList.filter(
      (product) =>
        product.name.toLowerCase() == searchitem ||
        product.category.toLowerCase() == searchitem
    );
    if (productsFound.length !== 0) {
      setFilteredProducts(productsFound);
    } else {
      setFilteredProducts([]);
      setNoResultSearch("Sem resultados para sua busca...");
    }
  };

  const cleanSearch = () => {
    setFilteredProducts([]);
    setSearchItem("");
    setNoResultSearch("");
  };

  const currentSaleLocalStorage = localStorage.getItem("@CurrentSale");
  const [currentSale, setCurrentSale] = useState(
    currentSaleLocalStorage ? JSON.parse(currentSaleLocalStorage) : []
  );

  useEffect(() => {
    localStorage.setItem("@CurrentSale", JSON.stringify(currentSale));
  }, [currentSale]);

  const addToCart = (productId: number) => {
    const productIndex = currentSale.findIndex(
      (product: any) => product.id === productId
    );
    if (productIndex === -1) {
      const productToAdd = productsList.find(
        (product) => product.id === productId
      );
      setCurrentSale([...currentSale, productToAdd]);
      toast.success("Produto adicionado ao carrinho!", {
        autoClose: 2000,
        theme: "colored",
      });
    } else {
      toast.warning("Produto já adicionado ao carrinho!", {
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  const removeProduct = (productId: number) => {
    const updatedSale = currentSale.filter(
      (product: any) => product.id !== productId
    );
    setCurrentSale(updatedSale);
    toast.success("Produto excluido com sucesso!", {
      autoClose: 2000,
    });
  };

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = currentSale.reduce(
      (acc: number, product: IProducts) => acc + product.price,
      0
    );
    setCartTotal(
      total.toLocaleString("PT-BR", { style: "currency", currency: "BRL" })
    );
  }, [currentSale]);

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");

    navigate("/");
  };

  return (
    <CartContext.Provider
      value={{
        logout,
        productsList,
        currentSale,
        addToCart,
        removeProduct,
        cartTotal,
        modal,
        setModal,
        setCurrentSale,
        filteredProducts,
        searchItem,
        setSearchItem,
        showProducts,
        cleanSearch,
        noResultSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
