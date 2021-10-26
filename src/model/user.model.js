// get users list
let users = [{
    "id": 1,
    "firstName" : "ali",
    "lastName" : "ahmed",
    "age" : 20,
    "email" : "moha99@gmail.com",
    "password" : "password12",
}]

// get users
const getUsers = ()=> users; // return all users

// get user
const getUser = id => users.filter(user=>user.id==id); // get on user

// create user
const createUser = user => users.push(user); // add new user

// update user
const updateUser = (user)=>{

    let objIndex = users.findIndex((obj => obj.id == user.id)) // get user index
 
    let firstName = users[objIndex].firstName = user.firstName // firstname assign to variable

    let lastName = users[objIndex].lastName = user.lastName // lastname assign to a variable
    let password = users[objIndex].password = user.password // password assign to a variable

    users.map(x => (x.id === user.id ? { ...x, firstName,lastName,password } : x));
    return users;
}

// delete user
const deleteUser = (id)=>{
    let objIndex = users.findIndex((obj => obj.id == id)) // get index of user
    users.splice(objIndex,1);  // romeve from array 
}

// check user login
const isEmailAndPasswordExist = (email,password) => users.filter(user=> 
    user.email==email && user.password==password);  


module.exports=
{
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    isEmailAndPasswordExist
}