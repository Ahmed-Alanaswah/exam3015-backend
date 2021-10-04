"use strict";

const mongoose = require("mongoose");

const flowerSchema = mongoose.Schema({
	instructions: String,
	photo: String,
	name: String,
	slug: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
	},
});

const FlowerModel = mongoose.model("flowers", flowerSchema);

module.exports = { FlowerModel };
