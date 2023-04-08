const database = require('../models');

class PetsController{
    static async PegaTodosPets (req,res){
        try {
            const todosPets = await database.Pets.findAll();
            return res.status(200).json(todosPets);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async PegaUmPet(req, res){
        try {
            const { id } = req.params;
            const umPet = await database.Pets.findOne({where: {id:Number(id)} });
            return res.status(200).json(umPet);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async CriaUmPet (req, res){
        try {
            const pet = req.body;
            const petCriado = await database.Pets.create(pet);
            return res.status(200).json(petCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async AtualizaUmPet (req, res){
        try {
            const { id } = req.params;
            const pet = req.body;
            await database.Pets.update(pet,{ where: {id:Number(id)} });
            const umPet = await database.Pets.findOne({where: {id:Number(id)} });
            return res.status(200).json(umPet);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async DeletaUmPet(req, res){
        try {
            const { id } = req.params;
            await database.Pets.destroy({where: {id:Number(id)} });
            return res.status(200).json({message:`O pet com o id ${id} foi deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PetsController;