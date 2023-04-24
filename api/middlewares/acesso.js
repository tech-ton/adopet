require('dotenv').config();
const database = require('../models');
const jwt = require('jsonwebtoken');

class Acesso{
    static async login(req, res){
        const {email, senha} = req.body
        const umtutor = await database.Tutores.findOne({where: {email:email, senha: senha} });
        if(umtutor){
            const donoAbrigo = await database.Abrigos.findOne({where: {id_dono:Number(umtutor.id)} });
            if(donoAbrigo){
                const token = jwt.sign({id:donoAbrigo.id, auth: true}, process.env.SENHA_TOKEN, {expiresIn: 60})
                return res.status(200).json({msg: "É dono de um abrigo", token:token});
            } else{
                const token = jwt.sign({id:umtutor.id, auth: false}, process.env.SENHA_TOKEN, {expiresIn: 60})
                return res.status(200).json({msg: "É um usuario normal", token:token});
            } 
        } else{
            return res.status(200).json({msg: "Login ou senha incorreto"});
        }
    }

    static verificaDonoAbrigo(req,res,next){
        const token = req.headers['x-access-token'];
        jwt.verify(token, process.env.SENHA_TOKEN, (err, decoded) => {
            if(err) { return res.status(401).json({msg: "Voce não tem acesso a isso"}); }
            req.auth = decoded.auth;
            next();
        });
    }

    static logout(req,res){
        res.end();
    }
}

module.exports = Acesso;