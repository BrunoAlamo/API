const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /quotes'
    });
});

router.post('/', (req, res, next) => {
    const quote = {
        quote: req.body.quote,
        author: req.body.author
    }
    res.status(201).json({
        message: 'Handling POST requests to /quotes',
        createdQuote: quote
    });
});

router.get('/:quoteId', (req, res, next) => {
    const id = req.params.quoteId;
    if(id === 'special'){
        res.status(200).json({
           message: 'You discovered the special ID',
           id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:quoteId', (req, res, next) => {
   res.status(200).json({
       message: 'Updated quote!'
   });
});

router.delete('/:quoteId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted quote!'
    });
 });

module.exports = router;