const router = require('express').Router(); // import express router

const userRoute = require('./user.route');

let routes = [
    {
        path: '/user',
        route : userRoute
    }
]

routes.map((route=> router.use(route.path,route.route)))

module.exports=router


