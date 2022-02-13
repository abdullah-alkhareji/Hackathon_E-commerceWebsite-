import React, { useState } from "react";
import productStore from "../stores/productStore";
import { Modal, Button, Form } from "react-bootstrap";
const Cart = () => {
	const [ceckOutCom, setCeckOutCom] = useState(false);

	const handleShowModel = () => {
		setCeckOutCom(true);
	};

	const handleClose = () => {
		setCeckOutCom(false);
		handleSubmit();
	};

	const handleSubmit = () => {
		alert("thank you for purchcing!");
		window.location.reload();
	};

	const handleChange = () => {};
	return (
		<div className='p-3'>
			{ceckOutCom && (
				<Modal show={ceckOutCom} onHide={handleClose}>
					<Form onSubmit={handleSubmit}>
						<Modal.Header closeButton>
							<Modal.Title>Check Out</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div className='row'>
								<Form.Group className='mb-3'>
									<Form.Label>
										The Name of The Sneaker:
										{
											<div>
												{productStore.cart.map(product => (
													<div className='card mb-3 p-3'>
														<div className='d-flex align-items-center gap-3'>
															<img
																src={product.image}
																width={100}
																height={100}
																style={{ objectFit: "cover" }}
																alt=''
															/>
															<div className=''>
																<h2 className='text-capitalize'>
																	{product.name}
																</h2>
																<div className='d-flex gap-3'>
																	<p className='text-secondary'>
																		size: {product.size}
																	</p>
																	<p className='text-secondary'>
																		price: {product.priceAfter}
																	</p>
																</div>
															</div>
														</div>
													</div>
												))}
											</div>
										}
										<select>
											<option>KNET</option>
											<option>MasterCard</option>
											<option>VISA</option>
										</select>
									</Form.Label>
								</Form.Group>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}>
								Close
							</Button>
							<Button
								type='submit'
								name='genre'
								variant='primary'
								onClick={handleClose}>
								Pay
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			)}
			<div className='d-flex justify-content-between align-items-center'>
				<h1 className=''>Cart</h1>
			</div>
			<div>
				{productStore.cart.map(product => (
					<div className='card mb-3 p-3'>
						<div className='d-flex align-items-center gap-3'>
							<img
								src={product.image}
								width={100}
								height={100}
								style={{ objectFit: "cover" }}
								alt=''
							/>
							<div className=''>
								<h2 className='text-capitalize'>{product.name}</h2>
								<div className='d-flex gap-3'>
									<p className='text-secondary'>size: {product.size}</p>
									<p className='text-secondary'>price: {product.priceAfter}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div>
				<button onClick={handleShowModel} className='btn btn-primary'>
					Check Out
				</button>
			</div>
		</div>
	);
};

export default Cart;
