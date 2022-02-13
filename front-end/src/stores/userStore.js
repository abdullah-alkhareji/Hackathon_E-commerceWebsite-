import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProductStore {
	users = [];
	constructor() {
		makeAutoObservable(this);
	}

	signup = async newUser => {
		try {
			const formData = new FormData();
			for (const key in newUser) formData.append(key, newUser[key]);

			const response = await instance.post("/user/signup", formData);
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
productStore.fetchProducts();
export default productStore;
