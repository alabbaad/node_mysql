//This document will hold the model for the CRUD operation of the REST API

  const sql = require ("./db.config.js")
  
  //constructor
const Customer = function(customer){
  this.email = customer.email;
  this.name = customer.name;
  this.active = customer.active;
};

Customer.create = (newCustomer, result)=>{
    sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
}
console.log("created customer: ", { id: res.insertId, ...newCustomer });
result(null, { id: res.insertId, ...newCustomer });
});
};

Customer.findById = (customerId, result) => {
  sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Customer.getAll = result=>{
 sql.query("SELECT * FROM customers", (err,result)=>{
  if(err) throw err;
  console.log("Gotten all of instance")
 })
}


Customer.updateById = (customerId, result)=>{
  sql.query(
    "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;}
});
}

Customer.deleteById = (customerId, result)=>{
  sql.query("DELETE CUSTOMER WHERE id = ${customerId}", (err,res)=>{
    if (err) throw err;
    return;
  })
}

Customer.deleteAll = result=>{
  sql.query("DELETE * FROM customers", (err,res)=>{
    if (err) throw err;
    return
  })
}



module.exports = Customer;
