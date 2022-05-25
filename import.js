

const path = require("path");
const fs = require("fs");
const { parse } = require('csv-parse');
const { Sequelize, Model, DataTypes } = require("sequelize");

    


 module.exports =  async function () {

  const file = path.join(__dirname, 'users.csv');
  const results = [];
  return  await new Promise((resolve,reject)=>{
    fs.createReadStream(file)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data",  function (row) {
      const add = {
        firstName: row[0] ,
        lastName:row[2],
        email: row[1],
        createdAt: new Date(),
        updatedAt: new Date()

      };
      //console.log(add);
      results.push(add);
    }) 
    .on('close', () => {
      resolve(results);
    });
  })
  //console.log(results);

 }

 
