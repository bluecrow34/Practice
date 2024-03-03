const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const {} = require ('./helpers');

app.get('/mean', function(req, res){
    if (!req.query.nums){
        throw new ExpressError('', 200)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convert(numsAsStrings);
    if (nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: findMean(nums)
    }
    return res.send(result);
});


app.get('/median', function(req, res){
    if(!req.query.nums){
        throw new ExpressError('', 200)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convert(numsAsStrings);
    if (nums instanceof Error){
        throw new ExpressError(nums.message);
    }
    let result = {
        operation:"median",
        result: findMedian(nums)
    }
    return res.send(result);
});

app.get('/mode', function(req, res){
    if(!req.query.nums){
        throw new ExpressError('', 200)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convert(numsAsStrings);
    if (nums instanceof Error){
        throw new ExpressError(nums.message);
    }
    let result = {
        operation:"mode",
        result: findMode(nums)
    }
    return res.send(result);
});
