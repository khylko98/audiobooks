const express = require("express");
const cors = require("cors");
const booksRoutes = require("./src/books/routes");
const chaptersRoutes = require("./src/chapters/routes");
const imagesRoutes = require("./src/images/routes");
const audiosRoutes = require("./src/audios/routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.use("/api/v1/books", booksRoutes);
app.use("/api/v1/chapters", chaptersRoutes);
app.use("/api/v1/images", imagesRoutes);
app.use("/api/v1/audios", audiosRoutes);

app.listen(port, () => console.log(`Application listening on port ${port}`));
