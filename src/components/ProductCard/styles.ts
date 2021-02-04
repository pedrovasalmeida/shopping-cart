import styled from 'styled-components';
import { lighten, shade } from 'polished';
import { TiShoppingCart } from 'react-icons/ti';

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 300px;
  width: 200px;

  border: 2px solid #333;
  border-radius: 8px;

  padding: 0 10px;
  margin: 4px 8px;

  background: linear-gradient(#fff, #ccc);

  transition: border 300ms ease-in-out;

  &:hover {
    border: 2px solid purple;
  }
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;

  background: purple;

  border-radius: 8px;

  transition: transform 300ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 22px;

  color: #333;

  margin: 6px 0;
`;

export const Description = styled.span`
  font-size: 14px;
  color: #333;
  text-align: center;

  margin: 6px 0;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: purple;

  strong {
    font-size: 14px;
    margin-left: 4px;
    color: #666;
    text-decoration: line-through;
    text-decoration-color: #333;
  }
`;

export const Button = styled.input`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin: 4px 0;
  padding: 2px 0;

  border-radius: 8px;
  border: 1px solid #eee;

  transition: background 300ms ease;
  cursor: pointer;

  &:hover {
    background: ${lighten(0.1, '#eee')};
  }
`;

export const CartIcon = styled(TiShoppingCart)`
  position: absolute;
  left: 25px;
  top: 2px;
`;
