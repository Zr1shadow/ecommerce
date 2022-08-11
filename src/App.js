import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Nav/Header';
import LandingPage from './component/LandingPage';
import Home from './component/Home'
import Product from './component/Product';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <HashRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='/Home' element={<Home />} />
            <Route path="Home/:category" exact element={<Home />} />  
            <Route path="Home/:category/:id" exact element={<Product />} />
            <Route path="*" element={<Home />} />
          </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
