const https = require("https");

const getImageByUrl = (req, res) => {
  const image_url = req.query.image_url;

  if (!image_url) {
    res.status(400).json({ detail: "Missing image_url query parameter" });
    return;
  }

  https.get(image_url, (response) => {
    if (response.statusCode === 200) {
      res.setHeader("Content-Type", response.headers["content-type"]);
      response.pipe(res);
    } else {
      res.status(response.statusCode).end();
    }
  });
};

module.exports = {
  getImageByUrl,
};
