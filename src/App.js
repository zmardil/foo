import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Archive from "./pages/Archive";
import Product from "./pages/Product";
import Basket from "./pages/Basket";
import CreateAccount from "./pages/CreateAccount";

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/signin" component={SignIn} />
				<Route path="/archive" component={Archive} />
				<Route path="/product" component={Product} />
				<Route path="/basket" component={Basket} />
				<Route path="/signup" component={CreateAccount} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
