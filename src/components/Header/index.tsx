import React, { useState } from 'react';

import ProductsCart from '../ProductCart';

import {
  Container,
  HeaderDiv,
  LogoDiv,
  ButtonsDiv,
  Button,
  Cart,
} from './styles';

const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  const handleOpenCart = () => {
    setShowCart(!showCart);
  };

  return (
    <Container>
      <HeaderDiv>
        <LogoDiv>
          <span>Shopping Cart ™</span>
        </LogoDiv>

        <ButtonsDiv>
          <Button>Inicio</Button>
          <Button>Sobre</Button>
          <Button>NotFound</Button>
        </ButtonsDiv>
      </HeaderDiv>

      <Cart size={30} onClick={handleOpenCart} />

      <ProductsCart showCart={showCart} />
    </Container>
  );
};

export default Header;
