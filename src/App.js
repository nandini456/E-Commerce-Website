
import './App.css'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Product from './Pages/Product'
import ShopCategory from './Pages/ShopCategory'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
       < Route path = '/' element={<Shop/>}/>
       < Route path = '/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
       < Route path = '/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
       < Route path = '/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
       < Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
       </Route>
       <Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

       </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
