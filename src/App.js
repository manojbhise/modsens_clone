import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Shop_Women from './Pages/Shop_Women'
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='shop-women' element={<Shop_Women/>}/>
        <Route path='shop-men' element={<Home/>}/>
        <Route path='shop-beauty' element={<Home/>}/>
        <Route path='shop-kids' element={<Home/>}/>
        <Route path='' element={<Home/>}/>
        <Route path='coupons' element={<Home/>}/>
        <Route path='designers' element={<Home/>}/>
        <Route path='community' element={<Home/>}/>
        <Route path='why-modsens' element={<Home/>}/>
        <Route path='checkout' element={<Home/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
