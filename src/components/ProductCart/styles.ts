import styled, { css } from 'styled-components';

import { FiPlusSquare, FiMinusSquare } from 'react-icons/fi';

interface CartProps {
  showCart: boolean;
}

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
  justify-content: space-between;

  width: 100%;
  height: 50px;

  padding: 6px 8px;
  margin-bottom: 8px;

  border-radius: 8px;
  border-bottom: 1px solid #333;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  background: #eee;
`;

export const Image = styled.div`
  height: 100%;
  width: 50px;

  background: purple;

  border-radius: 8px;

  transition: transform 300ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;

  color: #333;

  margin: 6px 0;
`;

export const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.input`
  font-size: 18px;

  width: 20px;

  padding: 0 4px;
  margin: 0 4px;
  border-radius: 4px;
  background: #eee;

  color: #333;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: purple;

  strong {
    font-size: 14px;
    margin-left: 4px;
    color: #666;
    text-decoration: line-through;
    text-decoration-color: #333;
  }
`;

export const Increment = styled(FiPlusSquare)``;

export const Decrement = styled(FiMinusSquare)``;

export const TotalDiv = styled.div`
  position: absolute;
  bottom: 10px;

  display: flex;
  justify-content: space-between;
  border-top: 1px solid #333;

  width: 100%;

  padding: 2px 8px;
  span {
    color: #333;
    font-weight: bold;
    font-size: 18px;
  }

  p {
    color: purple;
    font-weight: bold;
    font-size: 18px;
  }
`;
