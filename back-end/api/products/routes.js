const express = require("express");
const upload = require("../../middleware/multer");

const {
	getProducts,
	productCreate,
	productDelete,
	productUpdate,
	fetchProduct,
} = require("./controller");

const router = express.Router();

// get all
router.get("/", getProducts);
// create new
router.post("/", upload.single("image"), productCreate);
// delete by id
router.delete("/:productId", productDelete);
//get one product
router.get("/:productId", fetchProduct);
// update by id
router.put("/:productId", upload.single("image"), productUpdate);

module.exports = router;
