const { response } = require('express');
const { dbConnection } = require('../../config/database/config.database');


const validationRole = (req, res = response, next) => {

    if(!req.user) {
        return res.status(500).json({ 
            msg: 'Must check rol first'
        })
    }

    const { role, user} = req.user;

    if(role != 3){
        return res.status(401).json({
            msg: 'You are not Admin User'
        })
    }
        

    next();
}


module.exports = {
    validationRole
}