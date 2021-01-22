const express = require("express");
const express = require("express");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
	host: "localhost",
	port: 8080,
	user: "root",
	password: "MiloLucas",
	database: "moviePlannerDB",
});

connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id " + connection.threadId);
});

//VIEWS ROUTES
app.get("/", (req, res) => {
	res.send("All my movies will go here");
});

app.get("/movies/:id", (req, res) => {
	res.send("A single movie will go here.");
});

app.get("/movies/:id/edit", (req, res) => {
	res.send("A for to update the movie will go here");
});

app.get("/movies/new", (req, res) => {
	res.send("A form to create a new movie will go here");
});

//API ROUTES

//LISTEN ON PORT
app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`);
});
