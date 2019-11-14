import React from "react";
//include images into your bundle
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Navbar } from "./navbar.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Card />
		</div>
	);
}
