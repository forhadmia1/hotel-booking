import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Assets/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Resorts from './Pages/Resorts/Resorts';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resorts' element={<Resorts />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
