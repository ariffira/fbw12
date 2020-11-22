// models
const Product = require('../models/Product');
const Picture = require('../models/Picture');
const jwt = require('jsonwebtoken');
const { registerHelper } = require('hbs');

// access Token Secret 
const accessTokenSecret = process.env.TOKEN_SECRET;


// Show home Page 
exports.runHome = (req, res) => {
    Product.find((err, data) => {
        if (err) throw err.message;
        res.render('products', {
            msg: req.flash('add'),
            data
        });
    }).populate('product_pic').populate('added_by')
}

// create new Product 
exports.addProduct = (req, res) => {
    if (req.session.token) {
        jwt.verify(req.session.token, accessTokenSecret, (err, payload) => {
            if (err) throw err.message;
            req.userId = payload.id;
        })
        let picIDs = [];
        req.files.map(item => {
            let newPicture = new Picture(item);
            newPicture.save((err, imgData) => {
                if (err) {
                    console.log(err)
                }
                else {
                    picIDs.push(imgData._id)
                    console.log('picIDs: ', picIDs)
                    if (picIDs.length == req.files.length) {
                        req.body.product_pic = picIDs
                        req.body.added_by = req.userId
                        let newProduct = new Product(req.body);
                        newProduct.save((err, pData) => {
                            if (err) {
                                console.log(err.message)
                            }
                            req.flash('add', 'New product has been added in database!')
                            res.redirect('/product/all');
                        })

                    }
                }
            })
        })
    }
    else {
        req.flash('add', 'You need to log in before adding new product')
        res.redirect('/product/all');
    }

}

// remove  Product 
exports.removeProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, data) => {
        req.flash('add', 'One product has been deleted from database!')
        res.redirect('/product/all');
    })
}

// ajax select one Product
exports.ajaxSelectOneProduct = (req, res) => {
    Product.findById(req.query.id, (err, data) => {
        res.json(data)
    })
}

// update one Product
exports.updateOneProduct = (req, res) => {
    req.body.updated_at = Date.now()
    Product.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
        req.flash('add', 'One product has been updated')
        res.redirect('/product/all');
    })
}


//Search one or more Product by name
exports.searchProductName = (req, res) => {

    Product.aggregate([
        {
            $match: {
                product_name: req.body.data
            }
        },
        {
            $lookup: {
                from: "pictures",
                localField: "product_pic",
                foreignField: "_id",
                as: "product_pic"
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "added_by",
                foreignField: "_id",
                as: "added_by"
            }
        }
    ], (err, data) => {
        if (err) throw err;
        if (data.length == 0) {
            res.render('products', {
                msg: 'No Product with the name: ' + req.body.data,
                data
            });
        }
        else {
            console.log(data)
            data.map((item, index )=> {
                data[index].added_by = data[index].added_by[0];
                if (index+1 == data.length){
                    res.render('products', {
                        msg: 'this are all Product with the name: ' + req.body.data,
                        data
                    });
                }
            })  
        }

    })
}

//Search one or more Product by price
exports.searchProductPrice = (req, res) => {
    console.log(req.body.data, typeof Number(req.body.data));
    Product.aggregate([
        {
            $match: { price: { $gte: Number(req.body.data) }}
        },
        {
            $lookup: {
                from: "pictures",
                localField: "product_pic",
                foreignField: "_id",
                as: "product_pic"
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "added_by",
                foreignField: "_id",
                as: "added_by"
            }
        }
    ], (err, data) => {
        if (err) throw err;
        if (data.length == 0) {
            res.render('products', {
                msg: 'No Product with the price: ' + req.body.data,
                data
            });
        }
        else {
            console.log(data)
            data.map((item, index )=> {
                data[index].added_by = data[index].added_by[0];
                if (index+1 == data.length){
                    res.render('products', {
                        msg: 'this are all Product with the price: ' + req.body.data,
                        data
                    });
                }
            })
        }
    })
}

//Search one or more Product by seller
exports.searchProductSeller = (req, res) => {
    console.log(req.body);
    Product.aggregate([
        {
            $lookup: {
                from: "users",
                localField: "added_by",
                foreignField: "_id",
                as: "added"     
            }
        },
        {
            $unwind:  "$added"
            
        },
        {
            $match: {
                $and: [
                    {'added.name.firstName': req.body.firstName},
                    {'added.name.lastName': req.body.lastName}
                ]
            }
        },
        {
            $lookup: {
                from: "pictures",
                localField: "product_pic",
                foreignField: "_id",
                as: "product_pic"
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "added_by",
                foreignField: "_id",
                as: "added_by"
            }
        }       
    ], (err, data) => {
        if (err) throw err;
        if (data.length == 0) {
            res.render('products', {
                msg: 'No Product with the seller name: ' + req.body.firstName+' '+req.body.lastName,
                data
            });
        }
        else {
            console.log(data)
            data.map((item, index )=> {
                data[index].added_by = data[index].added_by[0];
                if (index+1 == data.length){
                    res.render('products', {
                        msg: 'this are all Product with the seller name: ' + req.body.firstName+' '+req.body.lastName,
                        data
                    });
                }
            })
        }
        // res.json(data)
    })
}

//Search one or more Product by price and/or name
exports.searchProductNamePrice = (req, res) => {
    if (req.body.product_name == '' && req.body.price == ''){
        req.flash('add', 'You need to fill at least one Input')
        res.redirect('/product/all');
    }
    else if (req.body.product_name == '' || req.body.price == ''){
        let toSearch;
        if (req.body.product_name == '') toSearch = req.body.price
        else toSearch = req.body.product_name
        Product.aggregate([
            {
                $match: {  
                    $or: [
                        {product_name: toSearch},
                        {price: { $lte: Number(toSearch) }}
                    ]
                } 
            }
        ], (err, data) => {
            if (err) throw err;
            if (data.length == 0) {
                res.render('products', {
                    msg: 'No Product with your Search',
                    data
                });
            }
            else {
                res.render('products', {
                    msg: 'this are all Product with your Search',
                    data
                });
            }
        })
    }
    else {
        Product.aggregate([
            {
                $match: {  
                    $and: [
                        {product_name: req.body.product_name},
                        {price: { $lte: Number(req.body.price) }}
                    ]
                } 
            }
        ], (err, data) => {
            if (err) throw err;
            if (data.length == 0) {
                res.render('products', {
                    msg: 'No Product with your Search',
                    data
                });
            }
            else {
                res.render('products', {
                    msg: 'this are all Product with your Search',
                    data
                });
            }
        })
    }

}