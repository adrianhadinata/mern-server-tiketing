const 
    Categories = require('./model'),
    create = async (req, res, next) => {
         try {
            const
                {name} = req.body,
                result = await Categories.create({name});

            res.status(200).json({
                data: result
            });
         }  catch (err) {
            next(err);
         } 
    };

module.exports = {
    create
}