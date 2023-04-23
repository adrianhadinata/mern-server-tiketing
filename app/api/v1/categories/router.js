 const 
    express = require('express'),
    router = express(),
    {create, find, index, update} = require('./controller');


 // For testing Endpoint success or not in postman
 
 router.get('/testQuery', (req,res) => {
    const data = [
        {
            '_id': 1,
            'name': 'seminar'
        },
        {
            '_id': 2,
            'name': 'webinar'
        },
    ];

    console.log('Client req uri: localhost:3000/api/v1/cms/testQuery?keyword=seminar');

    res.status(200).json({
        'message': data.filter((category) => category.name === req.query.keyword)
    })
      
 });
 
 router.get('/testRouter', (req,res) => {
    res.status(200).json({
        message: 'Halaman Categories'
    })
 });
 
 //end

 router.get('/categories', index);
 router.get('/categories/:id', find);
 router.put('/categories/:id', update);
 router.post('/categories', create);

 module.exports = router;