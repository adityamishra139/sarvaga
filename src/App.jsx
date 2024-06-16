import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sarees from './pages/Sarees'
import SalwaarSuits from './pages/SalwaarSuits'
import Lehangas from './pages/Lehangas'
import Designers from './pages/Designers'
import Newarrivals from './pages/Newarrivals'
import Home from './pages/Home'
import Description from './pages/Description'
import { useAuth0 } from "@auth0/auth0-react";
import Admin from './pages/Admin';
import CartPage from './pages/Cart';
const App = () => {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease in sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  const {isAuthenticated} =  useAuth0();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          {/* <Route path='/signin' element={<Signin></Signin>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route> */}
          <Route
            path="/sale"
            element={<Home Authenticated={isAuthenticated}></Home>}
          ></Route>
          <Route
            path="/sarees"
            element={<Sarees Authenticated={isAuthenticated}></Sarees>}
          ></Route>
          <Route
            path="/salwaar-suits"
            element={
              <SalwaarSuits Authenticated={isAuthenticated}></SalwaarSuits>
            }
          ></Route>
          <Route
            path="/lehangas"
            element={<Lehangas Authenticated={isAuthenticated}></Lehangas>}
          ></Route>
          <Route
            path="/designers"
            element={<Designers Authenticated={isAuthenticated}></Designers>}
          ></Route>
          <Route
            path="/newArrivals"
            element={
              <Newarrivals Authenticated={isAuthenticated}></Newarrivals>
            }
          ></Route>
          <Route
            path="/description/:id"
            element={
              <Description Authenticated={isAuthenticated}></Description>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <CartPage Authenticated={isAuthenticated}></CartPage>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App