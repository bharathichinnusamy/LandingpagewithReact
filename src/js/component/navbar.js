import React from "react";
import "bootstrap";

export function Navbar() {
	return (
		<div style={{ marginBottom: "2rem" }}>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div className="container-fluid">
					<div
						className="navbar-header"
						style={{ paddingLeft: "8.5rem" }}>
						<a className="navbar-brand" href="#">
							Start Bootstrap
						</a>
					</div>
					<div
						className="collapse navbar-collapse"
						id="navbarResponsive">
						<ul
							className="navbar-nav ml-auto"
							style={{ paddingRight: "8rem" }}>
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
									<span className="sr-only">(current)</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
