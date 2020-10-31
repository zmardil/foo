import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../assets/hero-img.jfif";

function Home() {
	return (
		<main className="Home">
			<section className="Home__hero">
				<figure>
					<source media="(min-width: )" srcset="" sizes="" />
					<img src={heroImg} alt="" />
					<figcaption>
						<h4>20% off</h4>
						<p>Selected Home</p>
						<Link to="/" className="cta">
							Shop all Home Offers
						</Link>
					</figcaption>
				</figure>
			</section>
		</main>
	);
}

export default Home;
