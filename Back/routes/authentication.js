const express = require("express");
const router = express.Router()
const jwt = require("jsonwebtoken")
const { QueryTypes } = require('sequelize')
const sequelize = require("../db/connection")


router.get('/ska', (req, res) => {
    res.send('hola')
})


router.post("/login", async (req, res) => {
    //Se recive los datos
    const user = req.body
    console.log(user)
    //Validacion de esos datos
    if (user.username == '' || user.username == 'undefined') { res.status(403).json({ status: 403, msg: 'Error: Empty...' }) }
    if (user.password == '' || user.password == 'undefined') {
        res.status(403).json({ status: 403, msg: 'Error: Empty...' }) }

        //Verifica que user name exista
        const users = await sequelize.query('SELECT * FROM users WHERE username = ' + "'" + user.username + "'", { type: QueryTypes.SELECT })
        const pass = await sequelize.query('SELECT * FROM users WHERE password = ' + "'" + user.password + "'", { type: QueryTypes.SELECT })

        //Verifica que usuario y password
        if (users.length == 1 && pass.length == 1) {
            if (user.username === users[0].username && user.password === pass[0].password) {
                //Se genera y envia el token de seguridad
                jwt.sign({ user }, 'secretkey', { expiresIn: '1h' }, (err, token) => {
                    res.json({
                        token
                    });
                });
            }else{
                res.status(404).json({ status: 404, msg: 'Error: User or password Incorect...' })
            }

        }else {
            res.status(404).json({ status: 404, msg: 'Error: Data not found...' })
        }
});




module.exports = router