const ToDo = require('../../models/TODO/todo');
const Completed = require('../../models/TODO/completed');

exports.postInfo = async(req, res, next) => {
    try{
        const item = req.body.item;
        const descp = req.body.descp;
        const AddedItem = await ToDo.create({
            item: item,
            description: descp
        });
        res.status(201).json({ newAddedItem : AddedItem});
    }
    catch(err){
        res.status(500).json({error: err})
    }
}


exports.getToDoItemInfo = async (req, res, next) => {
    try{
        const allToDoItem = await ToDo.findAll();
        res.status(201).json({allToDoItems: allToDoItem })
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

exports.completedItemInfo = async (req, res, next) => {
    try{
        const delId = req.params.deleId;
        const completedItem = await ToDo.findByPk(delId);
        await Completed.create(completedItem.dataValues);
        const delUser = await ToDo.destroy( { where: { id:delId } });
        res.status(201).json({delItemFromToDO: delUser, completedItem: completedItem })
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

exports.getCompletedItemInfo = async (req, res, next) => {
    try{
        const allCompleteItem = await Completed.findAll();
        res.status(201).json({allCompletedItems: allCompleteItem })
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

exports.deleteInfo = async(req, res, next) => {
    try{
        const delId = req.params.deleId;
        const delUser = await Completed.destroy( { where: { id:delId } });
        res.status(201).json({delItemfromDB: delUser})
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

