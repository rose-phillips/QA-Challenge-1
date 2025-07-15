import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';

function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <main>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/checkout' element={<Checkout/>} />
    </Routes>
   </main>
   </BrowserRouter>
  )
}
export default App
