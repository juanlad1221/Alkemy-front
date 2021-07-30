const express = require("express")
const cors = require('cors')
const sequelize = require("./db/connection")

//Objeto Express
const app = express();

app.use(cors())
app.use(express.urlencoded({ extended:false }))
app.use(express.json())
/*
app.post("/api/login", (req , res) => {
    const user = {
        id: 1,
        nombre : "Henry",
        email: "henry@email.com"
    }

    jwt.sign({user}, 'secretkey', {expiresIn: '1h'}, (err, token) => {
        res.json({
            token
        });
    });

});

app.post("/api/getBalance", verifyToken, (req , res) => {

    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                    mensaje: "Post fue creado",
                    authData
                });
        }
    });
});*/









//Rutas, se antepone el prefijo /api
app.use('/api', require('./routes/authentication'))



//--------------------------SERVER---------------------------------------------------------
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`Server corriendo en ${app.get('port')}`)
})
//------------------------------------------------------------------------------------------




// Authorization: Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader =  req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
         const bearerToken = bearerHeader.split(" ")[1];
         req.token  = bearerToken;
         next();
    }else{
        res.sendStatus(403);
    }
}
