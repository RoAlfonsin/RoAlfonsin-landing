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
			<div className="col-12 col-md-3">
				<div class="card" style={{width:250}}>
					<img src="https://es.wikiarquitectura.com/wp-content/uploads/2017/01/43_Museo_Acropolis-500x325.jpg" class="card-img-top" />
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>

			<div className="col-12 col-md-3">
				<div class="card" style={{width:250}}>
					<img src="https://es.wikiarquitectura.com/wp-content/uploads/2017/01/43_Museo_Acropolis-500x325.jpg" class="card-img-top" />
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>

			<div className="col-12 col-md-3">
				<div class="card" style={{width:250}}>
					<img src="https://es.wikiarquitectura.com/wp-content/uploads/2017/01/43_Museo_Acropolis-500x325.jpg" class="card-img-top" />
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>

			<div className="col-12 col-md-3">
				<div class="card" style={{width:250}}>
					<img src="https://es.wikiarquitectura.com/wp-content/uploads/2017/01/43_Museo_Acropolis-500x325.jpg" class="card-img-top" />
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>

		</div>
	)
}

//<Footer />
function Footer(){
	return (
		<div className="container-flex bg-dark position-absolute bottom-0 w-100 d-flex justify-content-center">
			<p className="text-light">This is my website 2023</p>
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
