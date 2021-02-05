import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import { useToasts } from 'react-toast-notifications';

interface CartContext {
  addToCart(product: Product): void;
  removeFromCart(id: number): void;
  increment(id: number): void;
  decrement(id: number): void;
  products: Product[];
  getTotalCartPrice: () => number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const CartContext = createContext({} as CartContext);

const CartProvider: React.FC = ({ children }) => {
  const { addToast } = useToasts();

  const [products, setProducts] = useState<Product[]>([]);

  /** pega os produtos já salvos no carrinho anteriormente */
  useEffect(() => {
    const loadProducts = () => {
      const productsList = localStorage.getItem('@ShoppingCart:products');

      if (productsList) {
        setProducts([...JSON.parse(productsList)]);
      }
    };

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async (product: Product) => {
      const isProductExists = products.filter(prod => prod.id === product.id);

      if (isProductExists.length < 1) {
        addToast(`${product.title} adicionado ao carrinho!`, {
          appearance: 'success',
          autoDismiss: true,
        });

        const newProductsList = [...products, { ...product, quantity: 1 }];

        setProducts(newProductsList);

        localStorage.setItem(
          '@ShoppingCart:products',
          JSON.stringify(newProductsList),
        );
      } else {
        const newProductList = products.map(prod =>
          prod.id === product.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod,
        );

        addToast(
          `${isProductExists[0].title} adicionado novamente ao carrinho!`,
          {
            appearance: 'success',
            autoDismiss: true,
          },
        );

        setProducts(newProductList);
        localStorage.setItem(
          '@ShoppingCart:products',
          JSON.stringify(newProductList),
        );
      }
    },
    [products],
  );

  const increment = useCallback(
    id => {
      const newProducts = products.map(prod =>
        prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod,
      );

      setProducts(newProducts);

      localStorage.setItem(
        '@ShoppingCart:products',
        JSON.stringify(newProducts),
      );
    },
    [products],
  );

  const decrement = useCallback(
    id => {
      const newProducts = products.map(prod =>
        prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod,
      );

      /** remove os produtos com quantidade < 1 */
      const productsVerified = newProducts.filter(prod => prod.quantity > 0);

      setProducts(productsVerified);

      localStorage.setItem(
        '@ShoppingCart:products',
        JSON.stringify(productsVerified),
      );
    },
    [products],
  );

  const removeFromCart = useCallback(
    id => {
      const product = products.find(prod => prod.id === id);
      const newProductsList = products.filter(prod => prod.id !== id);

      addToast(`${product ? product.title : 'Item'} removido do carrinho!`, {
        appearance: 'warning',
        autoDismiss: true,
      });

      setProducts(newProductsList);

      localStorage.setItem(
        '@ShoppingCart:products',
        JSON.stringify(newProductsList),
      );
    },
    [products],
  );

  const getTotalCartPrice = useCallback(() => {
    // pegar valor de todos os produtos do carrinho
    let total = 0;

    products.forEach(prod => {
      total += prod.price * prod.quantity;
    });

    return total;
  }, [products]);

  const value = useMemo(
    () => ({
      addToCart,
      removeFromCart,
      increment,
      decrement,
      products,
      getTotalCartPrice,
    }),
    [
      addToCart,
      removeFromCart,
      increment,
      decrement,
      products,
      getTotalCartPrice,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = (): CartContext => {
  const context = useContext(CartContext);

  if (!context) throw new Error('useCart must be used within a CartProvider');

  return context;
};

export { CartProvider, useCart };
