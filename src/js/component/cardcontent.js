import React from "react";

export function Cardcontent() {
	return (
		<div className="card" style={{ width: "13.81rem" }}>
			<img
				src="http://via.placeholder.com/250x200"
				className="card - img -top"
				alt="..."
			/>
			<div className="card text-center">
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
				</div>
				<div className="card-footer text-muted">
					<a href="#" className="btn btn-primary">
						{" "}
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
}
