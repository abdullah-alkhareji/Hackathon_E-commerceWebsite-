import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
	return (
		<div className='container-fluid'>
			<NavBar />
			<div className='container mt-5'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/products' element={<ProductsList />} />
					<Route path='/products/:id' element={<ProductDetails />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
