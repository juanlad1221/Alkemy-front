const express = require("express")
const cors = require('cors')
const sequelize = require("./db/connection")

//Objeto Express
const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



//Rutas, se antepone el prefijo /api
app.use('/api', require('./routes/authentication'))




//--------------------------SERVER---------------------------------------------------------
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`Server corriendo en ${app.get('port')}`)

    //db conexion
    sequelize.authenticate().then(() => {
        console.log("Database Conected...")
    }).catch(err => console.log('Error in database...', err))

})
//------------------------------------------------------------------------------------------




// Authorization: Bearer <token>
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}
