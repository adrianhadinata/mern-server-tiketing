const 
    Categories = require('../../api/v1/categories/model'),
    {BadRequestError} = require('../../errors/bad-request')

    getAllCategories = async () => {
        const result = await Categories.find().select('_id name');
        return result;
    },

    createCategories = async (req) => {
        const
            {name} = req.body,
            checkDuplicated = await Categories.findOne({name});

            if(checkDuplicated){
                throw new BadRequestError('Duplicated category name')
            };
            
            result = await Categories.create ({name});
    }

    module.exports = {getAllCategories, createCategories};


