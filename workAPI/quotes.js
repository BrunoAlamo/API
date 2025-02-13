const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Quote = require('../models/quote');

router.get('/', (req, res, next) => {
    Quote.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

router.post('/', (req, res, next) => {
    const quote = new Quote({
        _id: new mongoose.Types.ObjectId(),
        quote: req.body.quote,
        author: req.body.author
    });
    quote
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling POST requests to /quotes',
            createdQuote: result
    })})
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

router.get('/:quoteId', (req, res, next) => {
    const id = req.params.quoteId;
    Quote.findById(id)
    .exec()
    .then(doc => {
        console.log("From database", doc);
        if(doc){
            res.status(200).json(doc); // Respond only once
        } else {
            res.status(400).json({message: 'No valid entry found for provided ID'});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.patch('/:quoteId', (req, res, next) => {
    const id = req.params.quoteId;
    const updateOps = {};

    // Ensure the request body is an array of objects with 'propName' and 'value'
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    // Use updateOne() instead of update() (update() is deprecated)
    Quote.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


router.delete('/:quoteId', (req, res, next) => {
    const id = req.params.quoteId;
    Quote.findByIdAndDelete(id) // Using findByIdAndDelete instead of remove
    .exec()
    .then(result => {
        if (result) {
            // If a quote is deleted, return the deleted result
            res.status(200).json({
                message: 'Quote deleted',
                deletedQuote: result
            });
        } else {
            // If no quote was found with that ID
            res.status(404).json({
                message: 'No valid entry found for provided ID'
            });
        }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
         error: err
      });
    });
 });

module.exports = router;