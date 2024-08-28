
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Signup from './pages/signup';
import ArtPieces from './pages/artpieces';
import ProductPage from './pages/paintingspage';
import { ProductProvider } from './components/productcontext';
import Main from './pages/min';
import ArtistProfile from './pages/artistprofile';
import Paintings from './pages/paintings';



function App() {
  return (
    <div className=" flex flex-col text-center ">
   
    <ProductProvider>
    <Router>
        <div className="App">
          <header className="App-header">
      
            <Routes>
<Route path="/" element={<Home />} />
<Route path="/min" element={<Main />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup/>} />
  <Route path="/artpieces" element={<ArtPieces />} />
  <Route path="/products" element={<ProductPage />} />
  <Route path="/paintings" element={<Paintings />} />
  <Route path="/artist/:id" element={<ArtistProfile />} />
</Routes>
          </header>
        </div>
      </Router>
    </ProductProvider>

    </div>
  );
}

export default App;
