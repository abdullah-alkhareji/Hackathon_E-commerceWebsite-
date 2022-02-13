import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import productStore from "../stores/productStore";

const ProductDetails = () => {
	const { id } = useParams();
	const [selectedSize, setSelectedSize] = useState("");

	const product = productStore.products.find(product => product._id === id);
	if (!product) return <Navigate to='/' />;
	console.log(selectedSize);
	const handleChnage = event => {
		setSelectedSize(event.target.value);
	};

	const addToCart = () => {
		productStore.addToCart(product._id, selectedSize);
		alert("Product add to the cart");
	};
	return (
		<div className='row p-3'>
			<div className='col-md-4 col-sm-12'>
				<img src={product.image} className='details-image' alt='' />
			</div>
			<div className='col-md-8 col-sm-12'>
				<div className='card p-3'>
					<div className='d-flex justify-content-between align-items-center'>
						<h3 className='m-0 p-0'>{product.name}</h3>
						<div className='d-flex gap-2'>
							<p
								className={`card p-2 m-0 ${
									product.saleAmount > 0
										? "text-decoration-line-through text-secondary"
										: ""
								}`}>
								{product.priceBefore} KD
							</p>
							{product.saleAmount > 0 && (
								<p className={`card p-2 m-0 text-dark`}>
									{product.priceAfter} KD
								</p>
							)}
						</div>
					</div>
					<hr />
					<div className=''>
						<h4>Description</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Praesentium ipsum delectus corrupti quibusdam natus, quisquam
							eius! Vel laborum, enim tempora voluptates, non placeat voluptatem
							reprehenderit ipsa, nostrum illo error iure?,
						</p>
					</div>
					<div className='row'>
						<div className='col-md-6 col-sm-12'>
							<h4>Sizes</h4>
							<div className='d-flex flex-wrap'>
								<select onChange={handleChnage} className='form-select'>
									<option selected disabled value='default'>
										default
									</option>
									{product.size.map(size => (
										<option value={size}>{size}</option>
									))}
								</select>
							</div>
						</div>

						<div className='col-md-6 col-sm-12 d-flex gap-3'>
							<h4>Color</h4>
							<div className=''>
								<div
									className='p-3 rounded-circle border'
									style={{ background: `${product.color}` }}></div>
							</div>
						</div>
					</div>
					<button className='btn btn-primary mt-3' onClick={addToCart}>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
