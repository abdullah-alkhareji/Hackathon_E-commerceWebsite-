import React from "react";
import { Form } from "react-bootstrap";
import productStore from "../stores/productStore";
import ProductItem from "./ProductItem";

const Home = () => {
	return (
		<div>
			<div className='bg-light p-5 text-center'>
				<h1 className=' mb-5'>
					Welcome to THE<b className='text-primary'>SNEAKER</b>
				</h1>
				<p className='fs-5'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
					voluptate possimus qui est id, impedit eveniet, porro debitis
					accusantium dolores quas tempore omnis obcaecati sed cumque animi
					quia, vitae facilis.
				</p>
				<button className='btn btn-outline-primary btn-lg mt-5'>
					SHOP NOW
				</button>
			</div>
			<div>
				<h2>Featured Products</h2>
				<div className='row'>
					{productStore.products
						.map(product => <ProductItem product={product} />)
						.splice(0, 4)}
				</div>
			</div>
			<div className=''>
				<h2>Subscribe to News Letter</h2>
				<Form>
					<Form.Control type='email' className='' />
					<button className='btn btn-primary'>Subscribe</button>
				</Form>
			</div>
		</div>
	);
};

export default Home;
