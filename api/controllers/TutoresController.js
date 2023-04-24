const database = require('../models');

class TutoresController{
    static async PegaTodosTutores (req,res){
        try {
            const todosTutores = await database.Tutores.findAll();
            if (todosTutores.length <= 0){
                return res.status(204).json("Não há tutores registrados");
            }
            return res.status(200).json(todosTutores);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async PegaUmTutor (req, res){
        try {
            const { id } = req.params;
            const umtutor = await database.Tutores.findOne({where: {id:Number(id)} });
            if (umtutor == null){
                return res.status(404).json("Não há um tutor registrado com esse id");
            }
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
            const umtutor = await database.Tutores.findOne({where: {id:Number(id)} });
            if (umtutor == null){
                return res.status(404).json("Não há um tutor registrado com esse id");
            }
            await database.Tutores.update(tutor,{ where: {id:Number(id)} });
            return res.status(200).json(umtutor);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async DeletaUmTutor (req, res){
        try {
            const { id } = req.params;
            const umtutor = await database.Tutores.findOne({where: {id:Number(id)} });
            if (umtutor == null){
                return res.status(404).json("Não há um tutor registrado com esse id");
            }
            await database.Tutores.destroy({where: {id:Number(id)} });
            return res.status(200).json({message:`O tutor com o id ${id} foi deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TutoresController;