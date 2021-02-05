/** Packages */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/** Components */
import { ToastProvider } from 'react-toast-notifications';
import Routes from './routes';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';

/** Global Styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <ToastProvider placement="bottom-right" autoDismissTimeout={3000}>
        <CartProvider>
          <Header />
          <Router>
            <Routes />
          </Router>
        </CartProvider>
      </ToastProvider>
    </>
  );
};

export default App;
