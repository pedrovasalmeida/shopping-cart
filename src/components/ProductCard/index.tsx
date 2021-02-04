import React, { useState } from 'react';

import {
  Product,
  Image,
  Title,
  Description,
  Price,
  Button,
  CartIcon,
} from './styles';

interface ProductProps {
  title: string;
  description: string;
  price: Number;
  hasPromotion: boolean;
  realPrice?: Number;
}

const ProductCard: React.FC<ProductProps> = (
  { title, description, price, hasPromotion = false, realPrice }: ProductProps,
  ...rest
) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleBuy = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };

  return (
    <Product>
      <Image />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>
        R$ {price.toFixed(2)}
        <>{hasPromotion && <strong>R$ {realPrice?.toFixed(2)}</strong>}</>
      </Price>
      <Button type="button" onClick={handleBuy} value="Comprar" />
      {showMessage && <span>Adicionado ao carrinho!</span>}
    </Product>
  );
};

export default ProductCard;
