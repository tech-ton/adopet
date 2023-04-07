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

    static async PegaUmTutor (req, res){
        try {
            const { id } = req.params;
            const umtutor = await database.Tutores.findOne({where: {id:Number(id)} });
            return res.status(200).json(umtutor);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async CriaUmTutor (req, res){
        try {
            const tutor = req.body;
            const tutorCriado = await database.Tutores.create(tutor);
            return res.status(200).json(tutorCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async AtualizaUmTutor (req, res){
        try {
            const { id } = req.params;
            const tutor = req.body;
            await database.Tutores.update(tutor,{ where: {id:Number(id)} });
            const umtutor = await database.Tutores.findOne({where: {id:Number(id)} });
            return res.status(200).json(umtutor);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async DeletaUmTutor (req, res){
        try {
            const { id } = req.params;
            await database.Tutores.destroy({where: {id:Number(id)} });
            return res.status(200).json({message:`O tutor com o id ${id} foi deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = AbrigosController;