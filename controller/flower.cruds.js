"use strict ";

const { FlowerModel } = require("../model/flowerSchemaModel");

const createFAvFlower = async (req, res) => {
	const { instructions, photo, name } = req.body;
	const slug = name.toLowerCase().split(" ").join("-");

	FlowerModel.find({ slug: slug }, (error, data) => {
		if (data.length > 0) {
			res.send("sorry");
		} else {
			const newFloweModel = new FlowerModel({
				instructions: instructions,
				photo: photo,
				name: name,
				slug: slug,
			});

			newFloweModel.save();
			res.send(newFloweModel);
		}
	});
};

const getFavFlower = async (req, res) => {
	const data = await FlowerModel.find({});
	res.send(data);
};

const deletFavFlower = (req, res) => {
	const slug = req.params.slug;

	FlowerModel.deleteOne({ slug: slug }, async (error, data) => {
		if (error) {
			res.send(error);
		} else {
			const data = await FlowerModel.find({});
			res.send(data);
		}
	});
};

const updateFavFlower = async (req, res) => {
	const slug = req.params.slug;
	const updateData = req.body;

	FlowerModel.findOne({ slug: slug }, (error, data) => {
		data.instructions = updateData.instructions;
		data.photo = updateData.photo;
		data.name = updateData.name;
	});

	const data = await FlowerModel.find({});
	res.send(data);
};

module.exports = {
	createFAvFlower,
	getFavFlower,
	deletFavFlower,
	updateFavFlower,
};
