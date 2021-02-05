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

  const handleOpenLink = (social: 'github' | 'linkedin') => {
    if (social === 'github') window.open('https://github.com/pedrovasalmeida');
    if (social === 'linkedin')
      window.open('https://www.linkedin.com/in/pedrovasalmeida/');
  };

  return (
    <Container>
      <HeaderDiv>
        <LogoDiv>
          <span>Pedro H.V.A.</span>
        </LogoDiv>

        <ButtonsDiv>
          <Button onClick={() => handleOpenLink('github')}>GitHub</Button>
          <Button onClick={() => handleOpenLink('linkedin')}>LinkedIn</Button>
        </ButtonsDiv>
      </HeaderDiv>

      <Cart size={30} onClick={handleOpenCart} />

      <ProductsCart showCart={showCart} />
    </Container>
  );
};

export default Header;
