import React from "react";

//<Navbar />
export default function Navbar(){
	return (
		<div className="container-flex">
			<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">Awesome Landing Page</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Services</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}