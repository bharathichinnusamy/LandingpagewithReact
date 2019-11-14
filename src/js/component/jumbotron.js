import React from "react";

export function Jumbotron() {
	return (
		<div className="container" style={{ marginTop: "5rem" }}>
			<div className="jumbotron">
				<h1 className="display-4" style={{ fontSize: "4.5rem" }}>
					A Warm Welcome!
				</h1>
				<p className="lead">
					React is a JavaScript library for building user interfaces.
					It is maintained by Facebook and a community of individual
					developers and companies. React can be used as a base in the
					development of single-page or mobile applications, as it is
					optimal for fetching rapidly changing data that needs to be
					recorded.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to action!
					</a>
				</p>
			</div>
		</div>
	);
}
