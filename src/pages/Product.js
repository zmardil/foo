import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import ShoeImg from "../assets/products/004071584.jfif";

function Product() {
	return (
		<main className="Product">
			<div className="Product__wrapper container">
				<section className="Product__header">
					<div className="Product__img-wrapper">
						<div className="Product__img">
							<img src={ShoeImg} alt="" />
						</div>
						<div className="Product__img">
							<img src={ShoeImg} alt="" />
						</div>
						<div className="Product__img">
							<img src={ShoeImg} alt="" />
						</div>
						<div className="Product__img">
							<img src={ShoeImg} alt="" />
						</div>
						<div className="Product__img">
							<img src={ShoeImg} alt="" />
						</div>
					</div>
					<div className="Product__primary-desc">
						<h1 className="Product__title">
							Foo React & Partners Glymton Leather Oxford Shoes, Black
						</h1>
						<p className="Product__price">LKR 6000.00</p>
						<p className="Product__discount">
							Save 25% (Price includes Savings)
						</p>
						<div className="Product__delivery">
							<p>Free Click & Collect over LKR 2000.00</p>
							<p>Free returns</p>
							<Link to="/">View delivery & returns options</Link>
						</div>
						<div className="Product__tag">
							<p className="Product__tag-title">Trending</p>
							<p className="Product__tag-desc">
								5 customers added to basket in the last 24 hours
							</p>
						</div>
						<div className="Product__colors">
							<p className="Product__colors-title">
								<span>Color: </span> Black
							</p>
							<ul className="Product__colors-wrapper">
								<li className="Product__color">Black</li>
								<li className="Product__color">Brown</li>
							</ul>
						</div>
						<div className="Product__sizes">
							<p className="Product__sizes-title">
								<span>Sizes: </span> 8
							</p>
							<ul className="Product__sizes-wrapper">
								<li className="Product__size">7</li>
								<li className="Product__size">8</li>
								<li className="Product__size">9</li>
								<li className="Product__size">10</li>
								<li className="Product__size">12</li>
							</ul>
						</div>
						<p className="Product__availability">Currently in Stock</p>
						<button className="Product__add-to-cart-btn">Add to stock</button>
					</div>
				</section>
				<section className="Product__footer">
					<div className="Product__secondary-desc"></div>
				</section>
			</div>
		</main>
	);
}

export default Product;
