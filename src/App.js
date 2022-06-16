import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Shop_Women from './Pages/Shop_Women'
import Footer from './Components/Footer';
import Shop_Men from './Pages/Shop_Men';
import Shop_Beauty from './Pages/Shop_Beauty';
import Shop_Kids from './Pages/Shop_Kids';
import Coupons from './Pages/Coupons';
import Designers from './Pages/Designers';
import Community from './Pages/Community';
import Why_ModSens from './Pages/Why_ModSens';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='shop-women' element={<Shop_Women/>}/>
        <Route path='shop-men' element={<Shop_Men/>}/>
        <Route path='shop-beauty' element={<Shop_Beauty/>}/>
        <Route path='shop-kids' element={<Shop_Kids/>}/>
        <Route path='' element={<Home/>}/>
        <Route path='coupons' element={<Coupons/>}/>
        <Route path='designers' element={<Designers/>}/>
        <Route path='community' element={<Community/>}/>
        <Route path='why-modsens' element={<Why_ModSens/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
