"use strict ";

const express = require("express");

const cors = require("cors");

require("dotenv").config();
const { getData } = require("./controller/flowerCOntroller");
const {
	createFAvFlower,
	getFavFlower,
	deletFavFlower,
	updateFavFlower,
} = require("./controller/flower.cruds");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
// mongoose.connect("mongodb://localhost:27017/flowers", {
// 	useNewUrlParser: true,

// 	useUnifiedTopology: true,
// });

mongoose.connect(
	"mongodb+srv://Aa1791994:Aa1791994@cluster0.h4c2b.mongodb.net/Newflower?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,

		useUnifiedTopology: true,
	}
);
app.listen(PORT, () => {
	console.log(`server start with port ${PORT}`);
});

app.get("/flowers", getData);
app.post("/flowers/favourite", createFAvFlower);
app.get("/flowers/favourite", getFavFlower);
app.delete("/flowers/favourite/:slug", deletFavFlower);
app.put("/flowers/favourite/:slug", updateFavFlower);
