import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
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
import Cartbody from "./components/cartbody";
import About from "./components/About";
import Orderbody from "./components/orderbody";

import Contact from "./components/Contact";
import Header from "./components/header";
import ServicesPage from "./pages/Servicesp";
import ProtectedRoutes from "./pages/ProtectedRoutes/protectedRoutes";

function App() {
	return (
		<div className='flex flex-col text-center'>
			<ProductProvider>
				<Router>
					<div className='App'>
						{/* Include Header component outside of Routes to display on all pages */}
						<Header />

						<main>
							<Routes>
								{/* Public Routes */}
								<Route path='/' element={<Home />} />
								<Route path='/login' element={<Login />} />
								<Route path='/signup' element={<Signup />} />
								<Route path='/cart' element={<Cart />} />
								<Route path='/payment/page' element={<PaymentPage />} />
								<Route path='/order' element={<Order />} />

								{/* Protected Routes */}
								<Route element={<ProtectedRoutes />}>
									<Route path='/dd' element={<Cartbody />} />
									<Route path='/about' element={<About />} />
									<Route path='/contact' element={<Contact />} />
									<Route path='/services' element={<ServicesPage />} />
									<Route path='/orderbody' element={<Orderbody />} />
									<Route path='/artist-info' element={<ArtistInfo />} />
									<Route path='/recommendations' element={<Recommendation />} />
									<Route path='/artpieces' element={<ArtPieces />} />
									<Route path='/products' element={<ProductPage />} />
									<Route path='/paintings' element={<Paintings />} />
									<Route path='/artist/:id' element={<ArtistProfile />} />
									<Route path='/artpiece/page' element={<ArtPiecePage />} />
									<Route path='/artists/page' element={<ArtistsPage />} />
									<Route path='/artists/:id' element={<ArtistDetailPage />} />
								</Route>

								{/* Catch-all redirect */}
								<Route path='*' element={<Navigate to='/' />} />
							</Routes>
						</main>
					</div>
				</Router>
			</ProductProvider>
			<ToastContainer />
		</div>
	);
}

export default App;
