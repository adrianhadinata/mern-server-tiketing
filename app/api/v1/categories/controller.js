const
    {getAllCategories, createCategories} = require('../../../services/mongooes/categories'),
    Categories = require('./model'),
    create = async (req, res, next) => {
         try {
            const result = await createCategories(req);
            
            res.status(201).json({
                data: result
            });
         }  catch (error) {
            next(error);
         } 
    },
    index = async (req, res, next) => {
        try {
            const result = await getAllCategories(res);
            res.status(200).json({
                data: result
            });
        } catch (error) {
            next(error);
        }
    },
    find = async (req, res, next) => {
        try {
            const 
                {id} = req.params,
                result = await Categories.findOne({_id: id});
            if(!result) {
                return res.status(404).json({
                    message: 'Categories not found'
                });
            }
            res.status(200).json({
                data: result
            });
        } catch (error) {
            next(error);
        }
    },
    update = async(req, res, next) => {
        try {
            const 
                {id} = req.params,
                {name} = req.body,
                checkCategories = await Categories.findById(id);
            if(!checkCategories) {
                return res.status(404).json({
                    message: 'Categories not found'
                });
            };
            checkCategories.name = name;
            await checkCategories.save();
            res.status(200).json({
                data: checkCategories
            });
        } catch (error) {
            next(error);
        }
    }

module.exports = {
    index,
    find,
    create,
    update
}