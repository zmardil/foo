import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { User, ShoppingCart } from "react-feather";

function Header() {
	return (
		<header className="Header">
			<nav className="Header__site-map">
				<div className="Header__site-map-wrapper container">
					<Link to="/about">About us</Link>
					<Link to="/our-shops">Our Shops</Link>
					<Link to="/customer-servies">Customer Services</Link>
				</div>
			</nav>
			<div className="Header__site-nav">
				<div className="Header__site-nav-wrapper container">
					<img src={Logo} className="Header__logo" alt="Foo App Logo" />
					<div className="Header__site-nav-search">
						<div className="Header__site-nav-search-wrapper">
							<input
								type="search"
								aria-label="Search product or brand"
								placeholder="Search product or brand"
							/>
						</div>
					</div>
					<nav className="Header__site-nav-profile-nav">
						<Link class="signin" to="/signin">
							Sign In
						</Link>
						<Link to="/">
							<User color="black" />
						</Link>
						<Link to="/">
							<ShoppingCart color="black" />
						</Link>
					</nav>
				</div>
			</div>
			<nav className="Header__nav">
				<div className="container">
					<Link to="/">Christmas</Link>
					<Link to="/">Home & Garden</Link>
					<Link to="/">Furniture & Lights</Link>
					<Link to="/">Electricals</Link>
					<Link to="/">Women</Link>
					<Link to="/">Men</Link>
					<Link to="/">Beauty</Link>
					<Link to="/">Baby & Child</Link>
					<Link to="/">Sports & Leisure</Link>
					<Link to="/">Gifts</Link>
					<Link to="/">Sale</Link>
				</div>
			</nav>
		</header>
	);
}

export default Header;
