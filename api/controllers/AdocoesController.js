const database = require('../models');
class AdocoesController{
    static async PegaTodasAdocoes (req,res){
        try {
            const todasAdocoes = await database.Adocoes.findAll();
            console.log(req.auth);
            if (todasAdocoes.length <= 0){ 
                return res.status(204).json({msg: "Não há adoções registradas"});
            }
            return res.status(200).json(todasAdocoes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async PegaUmaAdocao(req, res){
        try {
            const { id } = req.params;
            const umaAdocao = await database.Adocoes.findOne({where: {id:Number(id)} });
            if (umaAdocao == null){
                return res.status(404).json("Não há adoção registrada com esse id");
            }
            return res.status(200).json(umaAdocao);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async CriaUmaAdocao (req, res){
        try {
            const adocao = req.body;
            const { id_pet } = req.body;
            database.sequelize.transaction(async transacao=>{
                await database.Pets.update({ adotado: true },{ where: {id:Number(id_pet)} }, {transaction: transacao});
                const adocaoCriada = await database.Adocoes.create(adocao, { transaction: transacao });
                return res.status(200).json(adocaoCriada);
            }) 
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async AtualizaUmaAdocao (req, res){
        try {
            const { id } = req.params;
            const adocao = req.body;
            const umaAdocao = await database.Adocoes.findOne({where: {id:Number(id)} });
            if (umaAdocao == null){
                return res.status(404).json("Não há adoção registrada com esse id");
            }
            await database.Adocoes.update(adocao,{ where: {id:Number(id)} });
            return res.status(200).json(umaAdocao);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async DeletaUmaAdocao(req, res){
        try {
            const { id } = req.params;
            database.sequelize.transaction(async transacao=>{ 
                const umaAdocao = await database.Adocoes.findOne({where: {id:Number(id)} }, {transaction: transacao});
                const umPet = await database.Pets.scope('todos').findOne({where: {id:Number(umaAdocao.id_pet)} }, {transaction: transacao});
                if (umaAdocao == null){
                    return res.status(404).json("Não há adoção registrada com esse id");
                }

                if (req.auth && umPet.id_abrigo == req.id) {
                    await database.Pets.scope('adotado').update({adotado: false},{ where: {id:umaAdocao.dataValues.id_pet} }, {transaction: transacao});
                    await database.Adocoes.destroy({where: {id:Number(id)} }, {transaction: transacao});
                    return res.status(200).json({message:`A adocao com o id ${id} foi deletado`});
                } else {
                    return res.status(401).json({msg:`Você só pode deletar registros do seu abrigo`});
                } 
            }) 
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = AdocoesController;