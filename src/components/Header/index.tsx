import React, { useState } from 'react';

import ProductsCart from '../ProductCart';

import { Container, ButtonsDiv, Button, Cart, CartProduct } from './styles';

const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  const handleOpenCart = () => {
    setShowCart(!showCart);
  };

  return (
    <Container>
      <ButtonsDiv>
        <Button>Inicio</Button>
        <Button>Sobre</Button>
        <Button>NotFound</Button>
      </ButtonsDiv>

      <Cart size={30} onClick={handleOpenCart} />

      <ProductsCart showCart={showCart} />
    </Container>
  );
};

export default Header;
