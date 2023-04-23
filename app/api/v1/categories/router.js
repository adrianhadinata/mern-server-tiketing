 const express = require('express');
 const router = express();


 // Untuk testing Endpoint success or not di postman
 
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
 
 router.get('/categories', (req,res) => {
    res.status(200).json({
        message: 'Halaman Categories'
    })
 });
 
 //end

 module.exports = router;