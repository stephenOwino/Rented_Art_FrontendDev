// src/components/ArtPiece.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Updated import
import { BrowserRouter as Router } from "react-router-dom";
import ArtPiece from "./components/ArtPiece";

const mockArt = {
	title: "Starry Night",
	image: "/images/starry-night.jpg",
	description:
		"A beautiful painting by Vincent van Gogh depicting a night sky.",
	artistBio: "Vincent van Gogh was a Dutch Post-Impressionist painter...",
	artistId: 1,
	priceBuy: 200,
	priceRent: 20,
};

describe("ArtPiece Component", () => {
	test("renders art image, description, and artist info", () => {
		render(
			<Router>
				<ArtPiece art={mockArt} />
			</Router>
		);

		// Check if the image is displayed
		expect(screen.getByAltText(mockArt.title)).toBeInTheDocument();

		// Check if the painting description is displayed
		expect(screen.getByText(mockArt.description)).toBeInTheDocument();

		// Check if the artist bio is displayed
		expect(screen.getByText(mockArt.artistBio)).toBeInTheDocument();

		// Check if the Learn More link is present
		const learnMoreLink = screen.getByText(/Learn More/);
		expect(learnMoreLink).toBeInTheDocument();
		expect(learnMoreLink).toHaveAttribute(
			"href",
			`/artists/${mockArt.artistId}`
		);

		// Check if the art title is displayed
		expect(screen.getByText(mockArt.title)).toBeInTheDocument();

		// Check if the Buy and Rent buttons are displayed with correct prices
		const buyButton = screen.getByText("Buy");
		expect(buyButton).toBeInTheDocument();
		expect(screen.getByText(`$${mockArt.priceBuy}`)).toBeInTheDocument();

		const rentButton = screen.getByText("Rent");
		expect(rentButton).toBeInTheDocument();
		expect(screen.getByText(`$${mockArt.priceRent}`)).toBeInTheDocument();

		// Check if Add to Cart button is displayed
		expect(screen.getByText("Add to Cart")).toBeInTheDocument();
	});

	test("buttons have correct styling and functionality", () => {
		render(
			<Router>
				<ArtPiece art={mockArt} />
			</Router>
		);

		// Check Buy button styling and behavior
		const buyButton = screen.getByText("Buy");
		expect(buyButton).toHaveClass(
			"px-6 py-3 bg-white text-black border border-black rounded-lg hover:bg-green-500 hover:text-white transition"
		);

		// Check Rent button styling and behavior
		const rentButton = screen.getByText("Rent");
		expect(rentButton).toHaveClass(
			"px-6 py-3 bg-white text-black border border-black rounded-lg hover:bg-yellow-500 hover:text-white transition"
		);

		// Check Add to Cart button styling and behavior
		const addToCartButton = screen.getByText("Add to Cart");
		expect(addToCartButton).toHaveClass(
			"px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
		);
	});
});
