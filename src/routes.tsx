import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ShopPage from './pages/ShopPage'
import { RegisterProvider } from './contexts/registerContext'
import { CartProvider } from './contexts/cartContext'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={
        <RegisterProvider>
          <RegisterPage />
        </RegisterProvider>
      }/>
      <Route path='/shop' element={<CartProvider><ShopPage /></CartProvider>} />
    </Routes>
  )
}