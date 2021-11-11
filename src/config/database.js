const oracledb = require("oracledb");
const util = require("../util/util");
const ApiError = require('../payload/ApiError')
const user = 'hr'//"mohamedam";
const password = 'hr'//"mohamedam";
const host = 'localhost'//"15.15.0.59:1521";
const database = "xe";

oracledb.initOracleClient({
  libDir: "F:\\oracle-client\\instantclient_21_3",
});

let connection;
const getConnection = async (query,params=[]) => {
  try {
    
    connection = await oracledb.getConnection({
      user: user,
        password: password,
        connectString: host + "/" + database,
      });
      // console.log('connected');
      let result = await connection.execute(query,params);
      connection.commit();
      return util.parseDatabaseObject(result);

  }catch (error) {
    console.log(error);
    throw new ApiError(523,error); 
  }
}


module.exports = {
  getConnection,
};
