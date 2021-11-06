const {getConnection} = require('../config/database')

// get users
const getUsers = async()=> {
    return await getConnection("select *from users") // return all users
}                       

// get user
const getUser = async(id) => {
    return await getConnection(`select *from users where id=${id}`) // return all users
}

// create user
const createUser = async(user) => {
    let query = `insert into users(id,firstname,lastname,age,email,password,role)
    VALUES(AUTOINCREMENT.nextval,'${user.firstName}','${user.lastName}','${user.age}',
    '${user.email}','${user.password}','${user.role}')`;

   return await getConnection(query)
}
// update user
const updateUser = async(user)=>{
    let query = `update users set firstname='${user.firstName}',password='${user.password}' where 
    id=${user.id}`;
   return await getConnection(query)
}

// delete user
const deleteUser = async(id)=>{
    let query = `delete users where id=${id}`;
    return await getConnection(query)
}

// check user login
const isEmailAndPasswordExist = async(email,password) => {
       return await getConnection(`select *from users where email='${email}' and password='${password}'`) 
    }

module.exports=
{
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    isEmailAndPasswordExist
}