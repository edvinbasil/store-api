const express = require('express')
const app = express();

app.use((req, res, next) => {
	res.status(200).json({
		message: "It works!"
	})
}) 		//Sets up middelware

module.exports = app;