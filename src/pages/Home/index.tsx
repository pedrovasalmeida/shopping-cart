/** Packages */
import React from 'react';

/** Componentes Personalizados */
import ProductCard from '../../components/ProductCard';
import Products from '../../productData.json';
import { Container, ProductsDiv } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ProductsDiv>
        {Products.map(prod => (
          <ProductCard
            title={prod.title}
            description={prod.description}
            price={prod.price}
            hasPromotion={prod.hasPromotion}
            realPrice={prod.realPrice}
          />
        ))}
      </ProductsDiv>
    </Container>
  );
};

export default Home;
