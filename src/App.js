import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Nav/Header';
import LandingPage from './component/LandingPage';
import Home from './component/Home'
import Product from './component/Product';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='/Home' element={<Home />} />
            <Route path="Home/:category" exact element={<Home />} />  
            <Route path="Home/:category/:id" exact element={<Product />} />
            <Route path="*" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
