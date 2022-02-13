import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProductStore {
	cart = [];
	constructor() {
		makeAutoObservable(this);
	}
	products = [];
	query = "";
	colorQuery = "";
	sizeQuery = "";
	categoryQuery = "";
	saleQuery = "";
	colors = [];
	col = [];
	sizes = [];
	siz = [];
	category = [];
	cate = [];

	fetchProducts = async () => {
		try {
			const response = await instance.get("/products");
			this.products = response.data;
			// console.log(response.data);
		} catch (error) {
			console.log("ProductStore -> fetchProducts -> error", error);
		}
	};

	setQuery = e => {
		this.query = String(e);
	};

	setColorQuery = e => {
		this.colorQuery = String(e);
	};

	setSizeQuery = e => {
		if (e === "") {
			this.sizeQuery = e;
		} else {
			this.sizeQuery = +e;
		}
	};

	setCategoryQuery = e => {
		this.categoryQuery = String(e);
	};

	setSaleQuery = e => {
		this.saleQuery = String(e);
	};

	addToCart = (productId, size) => {
		const product = this.products.find(product => product._id === productId);
		product.size = String(size);
		this.cart = [...this.cart, product];
		console.log(this.cart);
	};

	createProduct = async newProduct => {
		try {
			const formData = new FormData();
			for (const key in newProduct) formData.append(key, newProduct[key]);

			const response = await instance.post("/products", formData);
			this.products.push(response.data.payload);
		} catch (error) {
			console.log(
				"🚀 ~ file: productStore.js ~ line 16 ~ ProductStore ~ createProduct= ~ error",
				error
			);
		}
	};
}

const productStore = new ProductStore();

const runDefualut = async () => {
	await productStore.fetchProducts();

	productStore.colors = productStore.products
		.map(product => product.color)
		.flat();
	productStore.col = [...new Set(productStore.colors)];

	productStore.sizes = productStore.products
		.map(product => product.size)
		.flat();
	productStore.siz = [...new Set(productStore.sizes)];

	productStore.category = productStore.products
		.map(product => product.category)
		.flat();
	productStore.cate = [...new Set(productStore.category)];

	// console.log(productStore.siz);
};

runDefualut();

export default productStore;

// const productsData = [
// 	{
// 		id: 1,
// 		name: "p1",
// 		price: 20,
// 		image:
// 			"https://media.dior.com/couture/ecommerce/media/catalog/product/1/G/1602784337_3SN272ZIR_H165_E02_GHC.jpg?imwidth=800",
// 		category: "Nike",
// 		sizes: ["38", "39", "40", "41", "42", "43", "44"],
// 		available: true,
// 		color: "Blue",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsum delectus corrupti quibusdam natus, quisquam eius! Vel laborum, enim tempora voluptates, non placeat voluptatem reprehenderit ipsa, nostrum illo error iure?",
// 	},
// 	{
// 		id: 2,
// 		name: "p2",
// 		price: 20,
// 		image:
// 			"https://media.dior.com/couture/ecommerce/media/catalog/product/1/G/1602784337_3SN272ZIR_H165_E02_GHC.jpg?imwidth=800",
// 		category: "Nike",
// 		sizes: ["38", "39", "40", "41", "42", "43", "44"],
// 		available: false,
// 		color: "yellow",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsum delectus corrupti quibusdam natus, quisquam eius! Vel laborum, enim tempora voluptates, non placeat voluptatem reprehenderit ipsa, nostrum illo error iure?",
// 	},
// 	{
// 		id: 3,
// 		name: "p3",
// 		price: 20,
// 		image:
// 			"https://media.dior.com/couture/ecommerce/media/catalog/product/1/G/1602784337_3SN272ZIR_H165_E02_GHC.jpg?imwidth=800",
// 		category: "Nike",
// 		sizes: ["38", "39", "40", "41", "42", "43", "44"],
// 		available: true,
// 		color: "Blue",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsum delectus corrupti quibusdam natus, quisquam eius! Vel laborum, enim tempora voluptates, non placeat voluptatem reprehenderit ipsa, nostrum illo error iure?",
// 	},
// 	{
// 		id: 4,
// 		name: "p4",
// 		price: 20,
// 		image:
// 			"https://media.dior.com/couture/ecommerce/media/catalog/product/1/G/1602784337_3SN272ZIR_H165_E02_GHC.jpg?imwidth=800",
// 		category: "Nike",
// 		sizes: ["38", "39", "40", "41", "42", "43", "44"],
// 		available: true,
// 		color: "red",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsum delectus corrupti quibusdam natus, quisquam eius! Vel laborum, enim tempora voluptates, non placeat voluptatem reprehenderit ipsa, nostrum illo error iure?",
// 	},
// ];
