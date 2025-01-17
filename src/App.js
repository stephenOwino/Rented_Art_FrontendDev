import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import ArtPieces from "./pages/artpieces";
import ProductPage from "./pages/paintingspage";
import { ProductProvider } from "./components/productcontext";
import ArtistProfile from "./pages/artistprofile";
import Paintings from "./pages/paintings";
import Recommendation from "./pages/recommendations";
import ArtistInfo from "./pages/artist-info";
import Cart from "./pages/cart";
import Order from "./pages/order";
import ArtistsPage from "./pages/artistspage";
import ArtPiecePage from "./pages/artpiecepage";
import ArtistDetailPage from "./pages/artistdetailpage";
import PaymentPage from "./pages/paymentPage";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
	return (
		<div className='flex flex-col text-center'>
			<ProductProvider>
				<Router>
					<div className='App'>
						<header className='App-header'>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/login' element={<Login />} />
								<Route path='/signup' element={<Signup />} />
								<Route path='/about' element={<About />} />
								<Route path='/contact' element={<Contact />} />
								<Route path='/artist-info' element={<ArtistInfo />} />
								<Route path='/recommendations' element={<Recommendation />} />
								<Route path='/artpieces' element={<ArtPieces />} />
								<Route path='/cart' element={<Cart />} />
								<Route path='/order' element={<Order />} />
								<Route path='/products' element={<ProductPage />} />
								<Route path='/paintings' element={<Paintings />} />
								<Route path='/artist/:id' element={<ArtistProfile />} />
								<Route path='/artpiece/page' element={<ArtPiecePage />} />
								<Route path='/artists/page' element={<ArtistsPage />} />
								<Route path='/artists/:id' element={<ArtistDetailPage />} />
								<Route path='/payment/page' element={<PaymentPage />} />
							</Routes>
						</header>
					</div>
				</Router>
			</ProductProvider>
			<ToastContainer />
		</div>
	);
}

export default App;
