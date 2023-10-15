import Headers from './components/Headers';
import Home from './components/Home';
import Footer from './components/Footer';
import {Routes,Route} from "react-router-dom"
import CartDetails from './components/CartDetails';
import toast, { Toaster } from 'react-hot-toast';

import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Success from './components/Success';
import Cancle from './components/Cancle';



function App() {
  return (
    <>
     <Headers />
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
      <Route  path='/success' element={<Success />}/>
      <Route  path='/cancle' element={<Cancle />}/>
     </Routes>
     <Toaster />
     <Footer />
    </>
  );
}

export default App;
