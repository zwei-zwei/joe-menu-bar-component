// DROP DATABASE users;

// CREATE DATABASE users;

// USE users;

// CREATE TABLE users (
// 	user_id INT AUTO_INCREMENT,
// 	display_name VARCHAR (100) NOT NULL,
// 	logo VARCHAR (200) NOT NULL,
// 	profile_image_url VARCHAR (200) NOT NULL,
// 	category VARCHAR (100) NOT NULL,
// 	followers INT NOT NULL,
// 	following INT NOT NULL,
// 	PRIMARY KEY (user_id)
// );

// CREATE TABLE followers (
// 	follower_id INT AUTO_INCREMENT,
// 	display_name VARCHAR (100) NOT NULL,
// 	logo VARCHAR (200) NOT NULL,
// 	category VARCHAR (100) NOT NULL,
// 	PRIMARY KEY (follower_id)
// );

const mongoose = require('mongoose');

const userSchema = {
	user_id: { type: Number, unique: true },
	display_name: String,
	logo: String,
	profile_image_url: String,
	category: String,
	followers: Number,
	Following: Number,
}