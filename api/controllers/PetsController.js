const database = require('../models');

class PetsController{
    static async PegaTodosPets (req,res){
        try {
            const todosPets = await database.Pets.findAll();
            if (todosPets.length <= 0){
                return res.status(204).json("Não há pets registrados");
            }
            return res.status(200).json(todosPets);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async PegaTodosPetsAdotados (req,res){
        try {
            const todosPets = await database.Pets.scope('adotado').findAll();
            if (todosPets.length <= 0){
                return res.status(204).json("Não há pets adotados");
            }
            return res.status(200).json(todosPets);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async PegaUmPet(req, res){
        try {
            const { id } = req.params;
            const umPet = await database.Pets.scope('todos').findOne({where: {id:Number(id)} });
            if (umPet == null){
                return res.status(404).json("Não há um pet registrado com esse id");
            }
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
            const umPet = await database.Pets.findOne({where: {id:Number(id)} });
            if (umPet == null){
                return res.status(404).json("Não há um pet registrado com esse id");
            }
            await database.Pets.scope('todos').update(pet,{ where: {id:Number(id)} });
            return res.status(200).json(umPet);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async DeletaUmPet(req, res){
        try {
            const { id } = req.params;
            const umPet = await database.Pets.findOne({where: {id:Number(id)} });
            if (umPet == null){
                return res.status(404).json("Não há um pet registrado com esse id");
            }
            await database.Pets.destroy({where: {id:Number(id)} });
            return res.status(200).json({message:`O pet com o id ${id} foi deletado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PetsController;