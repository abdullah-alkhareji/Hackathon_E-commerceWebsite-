import React, { useState } from "react";
import productStore from "../stores/productStore";
import ProductItem from "./ProductItem";
import { observer } from "mobx-react";
import NewProductModal from "./NewProductModal";

const ProductsList = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);
	const handleOpen = () => setIsOpen(true);

	const search = e => {
		productStore.setQuery(e.target.value);
	};
	const colorFilter = e => {
		productStore.setColorQuery(e.target.value);
	};
	const sizeFilter = e => {
		productStore.setSizeQuery(e.target.value);
	};
	const categoryFilter = e => {
		productStore.setCategoryQuery(e.target.value);
	};
	const saleFilter = e => {
		productStore.setSaleQuery(e.target.value);
	};
	const productsList = productStore.products
		.filter(product => {
			return product.name
				.toLowerCase()
				.includes(productStore.query.toLowerCase().trim()) &&
				product.availabile &&
				product.color
					.toLowerCase()
					.includes(productStore.colorQuery.toLowerCase().trim()) &&
				product.category
					.toLowerCase()
					.includes(productStore.categoryQuery.toLowerCase().trim()) &&
				productStore.sizeQuery === ""
				? true
				: product.size.includes(productStore.sizeQuery);
		})
		.map(product => <ProductItem key={product._id} product={product} />);

	return (
		<div className='p-3'>
			<div className='d-flex justify-content-between align-items-center'>
				<h1 className=''>Shop</h1>
				<button onClick={handleOpen} className='btn btn-primary'>
					New
				</button>
			</div>
			<div className='d-flex gap-2 mb-2'>
				<input
					type='search'
					className='form-control'
					placeholder='Search ...'
					onChange={search}
				/>
				<select className='form-select' onChange={colorFilter}>
					<option value=''>All Colors</option>
					{productStore.col.map(color => (
						<option key={color} value={color}>
							{color}
						</option>
					))}
				</select>
				<select className='form-select' onChange={sizeFilter}>
					<option value=''>All sizes</option>
					{console.log("hi")};
					{productStore.siz.map(size => {
						console.log(size);
						return (
							<option key={size} value={size}>
								{size}
							</option>
						);
					})}
				</select>
			</div>
			{/* <div className='d-flex gap-2'>
				<input
					type='search'
					className='form-control'
					placeholder='Search ...'
					onChange={search}
				/>
				<select className='form-select' onChange={categoryFilter}>
					<option value=''>All Categories</option>
					{productStore.cate.map(category => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
				<select className='form-select' onChange={saleFilter}>
					<option value=''>All items</option>

					<option value='sale'>Item on Sale</option>
				</select>
			</div> */}
			<div className='row'>{productsList}</div>
			<NewProductModal isOpen={isOpen} handleClose={handleClose} />
		</div>
	);
};

export default observer(ProductsList);
