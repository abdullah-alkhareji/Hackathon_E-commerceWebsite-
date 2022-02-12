const express = require("express");
const { singup, getUsers } = require("./controller");

const router = express.Router();

router.get("/", getUsers);
router.post("/singup", singup);

module.exports = router;
