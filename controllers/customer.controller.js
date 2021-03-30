const Customer = require("../models/customer.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    //validate user
    if (!req.body){
        res.sendStatus(400)
        res.status(400).send({message: "Post Cannot be empty"
    })
    }

//Create new customer
    const customer = new Customer ({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    })

//Save Customer in the DB
 Customer.create(customer, (err,data)=>{
    if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Customer."
    });
  else res.send(data);
 })
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Customer.getAll(customer, (err,data)=>{
        if (err)
        res.status(400).send({
            message: "Customer not found"
        })
        else res.send(data)
    })
  
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Customer.findById(req.params.customerId,customer, (err,data)=>{
    if (err)
    res.status(404).send({
        message:   `User with ${req.params.customerId} does not exist`
    })
    else res.send(data)
  })
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
Customer.updateById(req.params.customerId,customer, (err,data)=>{
    if (err) throw err
    res.send(data)
})
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Customer.deleteById(req.params.customerId, customer, (err,data)=>{
      if (err) throw err;
      res.send(data)
  })
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Customer.deleteAll(customer, (err,data)=>{
      if (err) throw err
      res.send(data)
  })
};