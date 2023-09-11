const pool = require("../../db");
const queries = require("./queries");

const getChapterByBookId = (req, res) => {
  const book_id = parseInt(req.params.book_id);

  pool.query(queries.getChapterByBookId, [book_id], (error, results) => {
    if (error) throw error;
    return res.status(200).json(results.rows);
  });
};

module.exports = {
  getChapterByBookId,
};
