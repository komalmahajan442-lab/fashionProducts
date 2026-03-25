import './App.css'
import Home from './Components/Home/Home'
import Layout from './Components/Layout'
import Shop from './Components/Shop'
import {Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ContextProvider from './Context'
import ShopProduct from './Components/ShopProduct'
import Cart from './Components/Cart'

function App() {
  

  return (
    <>
    <ContextProvider>
<ToastContainer/>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Login/>}/>
      <Route path='shop/:id' element={<ShopProduct/>}/>
      <Route path='cart' element={<Cart/>}/>
      </Route>
    </Routes>
    </ContextProvider>
    </>
  )
}

export default App
