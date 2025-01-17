import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import New from "../components/new_in";
import Featured from "../components/featured";
import Editorial from "../components/editorial";
import About from "../components/About";
import Contact from "../components/Contact";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user, navigate]);

	//HOME
	return (
		<div className='flex flex-col space-y-16'>
			{/* Header Component */}
			<Header />

			{/* New Section */}
			<New />

			{/* Featured Section */}
			<div className='mt-16 block'>
				{" "}
				{/* Ensure visibility */}
				<Featured />
			</div>

			{/* Editorial Section */}
			<Editorial />

			{/* About Section with an ID for scrolling */}
			<About id='about-section' />
			<Contact />

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default Home;
