/** Packages */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/** Components */
import Routes from './routes';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';

/** Global Styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <CartProvider>
        <Header />
        <Router>
          <Routes />
        </Router>
      </CartProvider>
    </>
  );
};

export default App;
