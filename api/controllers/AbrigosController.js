const database = require('../models');

class AbrigosController{
    static async PegaTodosAbrigos (req,res){
        try {
            const todosAbrigos = await database.Abrigos.findAll();
            return res.status(200).json(todosAbrigos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async PegaUmAbrigo(req, res){
        try {
            const { id } = req.params;
            const umAbrigo = await database.Abrigos.findOne({where: {id:Number(id)} });
            return res.status(200).json(umAbrigo);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async CriaUmAbrigo (req, res){
        try {
            const abrigo = req.body;
            const abrigoCriado = await database.Abrigos.create(abrigo);
            return res.status(200).json(abrigoCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async AtualizaUmAbrigo (req, res){
        try {
            const { id } = req.params;
            const abrigo = req.body;
            await database.Abrigos.update(abrigo,{ where: {id:Number(id)} });
            const umAbrigo = await database.Abrigos.findOne({where: {id:Number(id)} });
            return res.status(200).json(umAbrigo);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async DeletaUmAbrigo (req, res){
        try {
            const { id } = req.params;
            await database.Abrigos.destroy({where: {id:Number(id)} });
            return res.status(200).json({message:`O abrigo com o id ${id} foi deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = AbrigosController;