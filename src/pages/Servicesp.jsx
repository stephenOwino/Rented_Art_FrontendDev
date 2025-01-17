// src/pages/ServicesPage.js
import React from "react";
import Services from "../components/Services";
import Paintingspage from "./paintingspage";

const ServicesPage = () => {
	return (
		<div className='services-page'>
			{/* Header */}

			{/* Services Section */}
			<Services />

			<Paintingspage />
		</div>
	);
};

export default ServicesPage;
