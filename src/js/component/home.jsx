import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//<NavBar />
function NavBar(){
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

//<Jumbotron />
function Jumbotron(){
	return (
		<div className="container bg-secondary-subtle mb-3">
			<h1 className="display-2">A Warm Welcome</h1>
			<p>"I asked my dentist for a crown, and they handed me a full-sized throne. Now I'm ruling the kingdom of Cavities with a toothbrush scepter! 👑😄 #DentalRoyalty #BrushingPower"</p>
			<button type="button" class="btn btn-primary">Call to action!</button>
		</div>
	)
}

//<Cards />
function Cards(){
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-lg-6 col-xl-3 mb-2">
					<div className="card text-center h-100">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mana_Baba_Temple.jpg/1280px-Mana_Baba_Temple.jpg" class="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Gather the ingredients</h5>
							<p className="card-text">List of ingredients (e.g., chicken breast, olive oil, salt, pepper, garlic powder)</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">Find out first!</a>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-lg-6 col-xl-3 mb-2">
					<div className="card text-center h-100">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mana_Baba_Temple.jpg/1280px-Mana_Baba_Temple.jpg" class="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Prepare the chicken</h5>
							<p className="card-text">Preheat the oven to 400°F (200°C), season the chicken breast with salt, pepper, and garlic powder on both sides. Heat a tablespoon of olive oil in a skillet over medium-high heat.</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">Find out second!</a>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-lg-6 col-xl-3 mb-2">
					<div className="card text-center h-100">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mana_Baba_Temple.jpg/1280px-Mana_Baba_Temple.jpg" class="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Bake the chicken</h5>
							<p className="card-text">Transfer the seared chicken breast to a baking dish.</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">Find out third!</a>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-lg-6 col-xl-3 mb-2">
					<div className="card text-center h-100">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mana_Baba_Temple.jpg/1280px-Mana_Baba_Temple.jpg" class="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Serve and enjoy</h5>
							<p className="card-text">Cooking times and temperatures may vary depending on the thickness of the chicken breast, so it's always a good idea to check for doneness using a meat thermometer (the internal temperature should reach 165°F or 74°C).</p>
						</div>
						<div className="card-footer">
							<a href="#" className="btn btn-primary">FO4th!</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

//<Footer />
function Footer(){
	return (
		<div className="container-flex bg-dark w-100 mt-3 text-center">
			<p className="text-light p-0">This is my website 2023</p>
		</div>
	)
}

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;
