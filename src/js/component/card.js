import React from "react";
import { Cardcontent } from "./cardcontent.js";

export function Card() {
	return (
		<div className="container">
			<div className="card-deck">
				<Cardcontent />
				<Cardcontent />
				<Cardcontent />
				<Cardcontent />
			</div>
		</div>
	);
}
