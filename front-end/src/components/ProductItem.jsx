import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
	return (
		<Link
			to={`/products/${product._id}`}
			className='col-md-3 col-sm-6 p-3 link'>
			<div className='card'>
				<img src={product.image} className='product-image' alt='' />
				<div className='d-flex p-3 justify-content-between align-items-center'>
					<h5>{product.name}</h5>
					<span>
						{product.saleAmount > 0 ? product.priceAfter : product.priceBefore}{" "}
						KD
					</span>
				</div>
			</div>
		</Link>
	);
};

export default ProductItem;
