const oracledb = require("oracledb");
const util = require("../util/util");
const user = "mohamedam";
const password = "mohamedam";
const host = "15.15.0.59:1521";
const database = "students";

oracledb.initOracleClient({
  libDir: "F:\\oracle-client\\instantclient_21_3",
})

var connection, result
const getConnection = async(query) => {
  try {
   connection = await oracledb.getConnection(
      {
        user: user,
        password: password,
        connectString: host + "/" + database,
      })

     result = await  connection.execute(query);  
     connection.commit()

    return util.parseDatabaseObject(result)

  } catch (error) {
    console.log(error); 
  }  
 
};
  
const executeQuery = (result) => {
  return result;
};

module.exports = {
  getConnection,
};
