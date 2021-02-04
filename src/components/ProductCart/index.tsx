import React from 'react';

import { useCart } from '../../context/CartContext';

import {
  ProductsCart,
  ProductsDiv,
  CartProduct,
  Title,
  CartTitle,
  Price,
  Image,
  Increment,
  Decrement,
  RemoveIcon,
  QuantityDiv,
  Quantity,
  TotalDiv,
  EmptyCartMessage,
} from './styles';

interface ProductProps {
  showCart: boolean;
}

const ProductCart: React.FC<ProductProps> = (
  { showCart }: ProductProps,
  ...rest
) => {
  const {
    removeFromCart,
    increment,
    decrement,
    products,
    getTotalCartPrice,
  } = useCart();

  return (
    <ProductsCart showCart={showCart}>
      <CartTitle>Carrinho de compras</CartTitle>

      <ProductsDiv>
        {products.length < 1 ? (
          <EmptyCartMessage>
            <span>Seu carrinho está vazio!</span>
          </EmptyCartMessage>
        ) : (
          <>
            {products.map(prod => (
              <CartProduct>
                <RemoveIcon size={20} onClick={() => removeFromCart(prod.id)} />
                <Image />
                <Title>{prod.title}</Title>
                <Price>R$ {prod.price.toFixed(2)}</Price>
                <QuantityDiv>
                  <Increment size={20} onClick={() => increment(prod.id)} />
                  <Quantity>{prod.quantity}</Quantity>
                  <Decrement size={20} onClick={() => decrement(prod.id)} />
                </QuantityDiv>
              </CartProduct>
            ))}
          </>
        )}
      </ProductsDiv>

      <TotalDiv>
        <span>Total:</span>
        <p>R$ {getTotalCartPrice().toFixed(2)}</p>
      </TotalDiv>
    </ProductsCart>
  );
};

export default ProductCart;
