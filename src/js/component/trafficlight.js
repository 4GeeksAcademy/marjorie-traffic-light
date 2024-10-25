import React, { useState } from "react";

function Home (){
	const [selected, setSelected] = React.useState("red")
    
	
   return (
	<div className="d-flex flex-column align-items-center">
	     <div className="container mt-4">

		 <div className={selected == "red" ? "redLight glow" : "redLight"} 
		  onClick={() => setSelected("red")}/>

		 <div
		 className={selected == "yellow" ? "yellowLight glow" : "yellowLight"} 
		 
		 onClick={() => setSelected("yellow")}/>

		 <div className={selected == "green" ? "greenLight glow" : "greenLight"} 
		
		onClick={() => setSelected("green")}/>
		</div>
	</div>
	);
};

export default Home;
