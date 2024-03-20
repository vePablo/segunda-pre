
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './component/navegabilidad/NavBar';
import HomeComponent from './component/home/HomeComponente';
import Products from './component/Products/Products';
import Crontacts from './component/Contactos/Contacts';


import Product from './component/Single/Product';
import Cuadernos from './component/category/Cuadernos';
import Remeras from './component/category/Remeras';


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path='/'                   element={<HomeComponent />} />
          <Route path='/products'           element={<Products />     } />
          <Route path="/products/:prodId" exact element={<Product />} />

          <Route path="/contacts"           element={<Crontacts />    } />
          <Route path='/products/cuadernos' element={<Cuadernos/>     }/>
          <Route path='/products/remeras'   element={<Remeras/>      }/>
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
