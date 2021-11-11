const { getConnection } = require("../config/database");

//#region get users
const getUsers = async () => {
  return await getConnection("select userid,fullname,active from users"); // return all users
};
//#endregion

//#region get user
const getUser = async (id) => {
  return await getConnection(`select *from users where userid=:id`, [id]); // return all users
};
//#endregion

//#region create user
const createUser = async (user) => {
  let res = await isEmailExists(user.email)
  if (res) {
    return false;
  }

  let query = `insert into users(userid,fullName,email,password,active)
    VALUES(userseq.nextval,:fullName,:email,:password,:active)`;
  return await getConnection(query, [
    user.fullName,
    user.email,
    user.password,
    0,
  ]);
};
//#endregion

//#region update user
const updateUser = async (user) => {
  let query = `update users set fullname=':fullName',password=':password' where userid=:id`;
  return await getConnection(query, [user.fullName, user.password, user.id]);
};
//#endregion

//#region delete user
const deleteUser = async (id) => {
  let query = `delete users where userid=:id`;
  return await getConnection(query, [id]);
};
//#endregion

//#region check user login
const isEmailAndPasswordExist = async (email, password) => {
  return await getConnection(
    `SELECT U.USERID, U.FULLNAME, U.EMAIL, R.ROLENAME
    FROM USERS U
    INNER JOIN USERROLE UR on u.userid=UR.userid
    INNER JOIN ROLES R on UR.ROLEID = R.ROLEID
    WHERE EMAIL =:email
    AND PASSWORD =:password
    AND ACTIVE = 1`,
    [email, password]
  );
};
//#endregion

//#region isEmailExists
const isEmailExists = async (email) => {
  let result = await getConnection(`select * from users where email=:email`, [email]);
  if (result.length) {
    return true;
  }

  return false;
};
module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  isEmailAndPasswordExist,
};
