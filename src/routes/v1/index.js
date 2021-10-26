const router = require('express').Router(); // import express router

const userRoute = require('./user.route');
const authRoute = require('./auth.route');


let routes = [
    {
        path: '/user',
        route : userRoute
    },
    {
        path: '/auth',
        route : authRoute
    } 
]

routes.map((route=> router.use(route.path,route.route)))

module.exports=router


