import styled, { css } from 'styled-components';

import { TiShoppingCart } from 'react-icons/ti';

interface CartProps {
  showCart: boolean;
}

export const Container = styled.nav`
  position: relative;
  display: flex;
  align-items: center;

  height: 50px;

  border-bottom: 1px solid #333;
  background: #eee;
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 100%;
  width: 90%;
`;

export const LogoDiv = styled.div`
  display: flex;
  justify-self: flex-start;

  span {
    font-weight: bold;
    color: #333;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.span`
  color: #333;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;

  padding: 0 32px;

  line-height: 18px;

  border-right: 1px solid #777;

  transition: color 300ms ease;

  &:last-child {
    border-right: 0;
  }

  &:hover {
    color: purple;
  }
`;

export const Cart = styled(TiShoppingCart)`
  position: absolute;
  right: 30px;

  border-radius: 50%;

  cursor: pointer;
  color: #333;

  transition: color 300ms ease;
  &:hover {
    color: purple;
  }
`;

export const ProductsCart = styled.div<CartProps>`
  position: absolute;
  right: 10px;
  top: 102%;

  ${props =>
    props.showCart
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}

  display: flex;
  flex-direction: column;

  border-radius: 8px;

  background: #eee;
  border: 1px solid #333;
  border-top: 0;

  width: 500px;
  height: 400px;

  transition: opacity 300ms ease;
  z-index: 2;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CartProduct = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;

  padding: 0 8px;
  margin-bottom: 2px;

  border-radius: 8px;
  border-bottom: 1px solid #333;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  background: #eee;
`;
