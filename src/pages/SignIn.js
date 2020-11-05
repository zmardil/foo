import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.scss";

function SignIn() {
	return (
		<main className="SignIn">
			<h2 className="SignIn__title">Sign In</h2>
			<section className="SignIn__form-wrapper">
				<form className="SignIn__form">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" />
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" />
					<button type="submit">Sign In</button>
				</form>
				<Link className="fyp-link" to="/">
					Forgotten your password?
				</Link>
				<p>
					We treat your personal data with care,please find our
					<a hre="#">privacy notice</a> here.
				</p>
				<hr />
				<div className="create-account">
					<h3>Don't have an account?</h3>
					<Link to="/signup">Create an account</Link>
				</div>
			</section>
		</main>
	);
}

export default SignIn;
