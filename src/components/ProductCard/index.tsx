import React from 'react';

import { useCart } from '../../context/CartContext';

import { Product, Image, Title, Description, Price, Button } from './styles';

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  hasPromotion: boolean;
  realPrice?: number;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  title,
  description,
  price,
  hasPromotion = false,
  realPrice,
}: ProductProps) => {
  const { addToCart } = useCart();

  const product = { id, title, price, quantity: 1 };

  return (
    <Product>
      <Image />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>
        R$ {price.toFixed(2)}
        <>{hasPromotion && <strong>R$ {realPrice?.toFixed(2)}</strong>}</>
      </Price>
      <Button type="button" onClick={() => addToCart(product)}>
        <span>Comprar</span>
      </Button>
    </Product>
  );
};

export default ProductCard;
