import styled, { css } from 'styled-components';

import { FiPlusSquare, FiMinusSquare } from 'react-icons/fi';

import { CgRemove } from 'react-icons/cg';

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
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  background: #eee;
  border: 1px solid #333;
  border-top: 0;

  width: 500px;
  min-height: 100px;
  height: auto;
  max-height: 500px;

  transition: opacity 300ms ease;
  z-index: 2;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 512px) {
    right: 5px;
    left: 5px;
    width: auto;
  }
`;

export const ProductsDiv = styled.div`
  overflow-y: scroll;

  height: 100%;
`;

export const CartProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;

  padding: 6px 8px;
  margin-bottom: 8px;

  border-radius: 8px;
  border-bottom: 1px solid #333;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  background: #eee;

  :last-child {
    border-bottom: 0;
  }

  @media only screen and (max-width: 500px) {
    height: auto;
  }
`;

export const DetailsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px;

  margin-left: 6px;

  @media only screen and (max-width: 390px) {
    width: 70%;
  }
`;

export const Image = styled.div`
  height: 50px;
  width: 50px;

  margin-right: 6px;

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

  max-width: 200px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media only screen and (max-width: 452px) {
    width: 150px;
  }

  @media only screen and (max-width: 406px) {
    font-size: 16px;
  }
`;

export const CartTitle = styled.p`
  font-weight: bold;
  font-size: 20px;

  text-align: center;
  text-transform: uppercase;
  width: 100%;

  color: #333;

  margin: 3px 0;
  padding: 8px;

  border-bottom: 1px solid #333;
`;

export const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.span`
  font-size: 18px;

  text-align: center;

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

  margin-right: 16px;

  @media only screen and (max-width: 406px) {
    font-size: 16px;
  }
`;

export const Increment = styled(FiPlusSquare)`
  cursor: pointer;
`;

export const Decrement = styled(FiMinusSquare)`
  cursor: pointer;
`;

export const RemoveIcon = styled(CgRemove)`
  cursor: pointer;

  color: red;

  margin-left: 4px;
`;

export const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 50px;

  border-top: 1px solid #333;
  padding: 2px 8px;
  padding-top: 8px;

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

export const EmptyCartMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  height: 90%;

  span {
    color: #333;
    font-weight: bold;
    font-size: 22px;
  }
`;
