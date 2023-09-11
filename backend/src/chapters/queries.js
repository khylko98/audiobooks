const getChapterByBookId = "SELECT * FROM chapters WHERE book_id = $1";

module.exports = {
  getChapterByBookId,
};
