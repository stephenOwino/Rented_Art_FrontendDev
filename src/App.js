import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import ArtPieces from "./pages/artpieces";
import ProductPage from "./pages/paintingspage";
import { ProductProvider } from "./components/productcontext";
import Main from "./pages/min";
import ArtistProfile from "./pages/artistprofile";
import Paintings from "./pages/paintings";

import ArtistsPage from "./pages/artistspage";
import ArtPiecePage from "./pages/artpiecepage";
import ArtistDetailPage from "./pages/artistdetailpage";

function App() {
	return (
		<div className=' flex flex-col text-center '>
			<ProductProvider>
				<Router>
					<div className='App'>
						<header className='App-header'>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/min' element={<Main />} />
								<Route path='/login' element={<Login />} />
								<Route path='/signup' element={<Signup />} />
								<Route path='/artpiece/form' element={<ArtPieces />} />
								<Route path='/products' element={<ProductPage />} />
								<Route path='/paintings' element={<Paintings />} />
								<Route path='/artist/profile' element={<ArtistProfile />} />
								<Route path='/artpiece/page' element={<ArtPiecePage />} />
								<Route path='/artists/page' element={<ArtistsPage />} />
								<Route path='/artists/:id' element={<ArtistDetailPage />} />
							</Routes>
						</header>
					</div>
				</Router>
			</ProductProvider>
		</div>
	);
}

export default App;
