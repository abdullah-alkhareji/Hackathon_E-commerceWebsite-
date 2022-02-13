import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import productStore from "../stores/productStore";

const NewProductModal = ({ isOpen, handleClose }) => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		description: "",
		priceBefore: "",
		saleAmount: "",
		image: "",
		category: "",
		color: "",
		size: "",
		availabile: true,
	});

	const handleChange = e => {
		setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
	};
	const handleSubmit = e => {
		e.preventDefault();
		productStore.createProduct();
		handleClose();
	};
	return (
		<Modal show={isOpen} onHide={handleClose}>
			<Form onSubmit={handleSubmit}>
				<Modal.Header closeButton>
					<Modal.Title>Add New Product</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='row'>
						<Form.Group className='mb-3'>
							<Form.Label>The Name of The Sneaker:</Form.Label>
							<Form.Control
								type='text'
								placeholder='the name here'
								onChange={handleChange}
								name='name'
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>The Description:</Form.Label>
							<Form.Control
								as='textarea'
								placeholder='the description here'
								onChange={handleChange}
								name='description'
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>The Image Of The Sneaker:</Form.Label>
							<Form.Control
								type='file'
								onChange={handleChange}
								name='image'
								required
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>The Brand:</Form.Label>
							<Form.Control
								type='text'
								placeholder='the brand here'
								onChange={handleChange}
								name='category'
								required
							/>
						</Form.Group>
						<div className='col-6'>
							<Form.Group className='mb-3'>
								<Form.Label>The Price:</Form.Label>
								<Form.Control
									type='number'
									placeholder='the price here'
									onChange={handleChange}
									name='priceBefore'
									required
								/>
							</Form.Group>
						</div>
						<div className='col-6'>
							<Form.Group className='mb-3'>
								<Form.Label>The Discount:</Form.Label>
								<Form.Control
									type='number'
									placeholder='the discount here'
									onChange={handleChange}
									name='saleAmount'
								/>
							</Form.Group>
						</div>
						<div className='col-6'>
							<Form.Group className='mb-3'>
								<Form.Label>The Color:</Form.Label>
								<Form.Control
									type='text'
									placeholder='the color here'
									onChange={handleChange}
									name='color'
									required
								/>
							</Form.Group>
						</div>
						<div className='col-6'>
							<Form.Group className='mb-3'>
								<Form.Label>The Sizes:</Form.Label>
								<Form.Control
									type='text'
									placeholder='for more sizes use (,) and add the size'
									onChange={handleChange}
									name='size'
								/>
							</Form.Group>
						</div>
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
						Add Book
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default NewProductModal;
