import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Table from './components/table';
import CoinList from './pages/coinList';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from './pages/home';
function App() {
  return (
   <>
    <BrowserRouter>
      <Navbar />
      <div className='bg-gray-100 h-screen w-screen flex flex-col justify-top px-32 py-10'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/coin_list" element={<CoinList />} />
        </Routes>
      </div>
    </BrowserRouter>
   </>
  );
}

export default App;
