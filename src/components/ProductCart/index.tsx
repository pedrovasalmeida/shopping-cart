import React from 'react';

import {
  ProductsCart,
  CartProduct,
  Title,
  Price,
  Image,
  Increment,
  Decrement,
  QuantityDiv,
  Quantity,
  TotalDiv,
} from './styles';

interface ProductProps {
  showCart: boolean;
}

const ProductCart: React.FC<ProductProps> = (
  { showCart }: ProductProps,
  ...rest
) => {
  return (
    <ProductsCart showCart={showCart}>
      <CartProduct>
        <Image />
        <Title>Titulo do Produto</Title>
        <Price>R$ 56,50</Price>
        <QuantityDiv>
          <Increment size={20} />
          <Quantity value={5} />
          <Decrement size={20} />
        </QuantityDiv>
      </CartProduct>

      <CartProduct>
        <Image />
        <Title>Titulo do Produto</Title>
        <Price>R$ 56,50</Price>
        <QuantityDiv>
          <Increment size={20} />
          <Quantity value={5} />
          <Decrement size={20} />
        </QuantityDiv>
      </CartProduct>

      <TotalDiv>
        <span>Total:</span>
        <p>R$ 999.99</p>
      </TotalDiv>
    </ProductsCart>
  );
};

export default ProductCart;
