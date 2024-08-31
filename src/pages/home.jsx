import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import New_in from "../components/new_in";
import Featured from "../components/featured";
import Editorial from "../components/editorial";


function Home() {
	return (
		<div className=" flex flex-col gap-y-4 space-y-8">

		<Header />
         <New_in />
		 <div className="mt-40">
		 <Featured />
		 </div>
		 <Editorial />
		<Footer />


		</div>
		
	
		
	);
}

export default Home;
