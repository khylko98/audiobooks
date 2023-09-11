const https = require("https");

const getAudioByUrl = (req, res) => {
  const audio_url = req.query.audio_url;

  https.get(audio_url, (response) => {
    if (response.statusCode === 200) {
      res.setHeader("Content-Type", "audio/mpeg");
      res.setHeader("Accept-Ranges", "bytes");
      response.pipe(res);
    } else {
      res.status(response.statusCode).end();
    }
  });
};

module.exports = {
  getAudioByUrl,
};
