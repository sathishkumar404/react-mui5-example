import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home'
import Pricing from '../pages/Pricing'
import Register from '../pages/Register'

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Index;