const handleAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

const parseDatabaseObject = (data) => {
  let columns = data.metaData;
  let rows = data.rows;
  let arr = [];

  if (data.rows) {
    rows.map((row, i) => {
      var obj = {};
      columns.map(
        (column, index) => (obj[column.name.toLowerCase()] = row[index])
      );
      arr.push(obj);
    });

    return arr;
  }
  return data.rowsAffected;
};

// parseDatabaseObject();

module.exports = { parseDatabaseObject, handleAsync };
