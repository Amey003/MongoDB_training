//lets import the mongodb native drivers.
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient , assert = require('assert');
//connection URL here
MongoClient.connect('mongodb://localhost:27017',function(err,db){
if (err)throw err;
var db = client.db('testDB');

//Creating student document to be inserted
var std1={name:'amey',standard:10,subject:['physics','Maths']};
var std2={name:'gunavat',standard:11,subject:['Biology','Maths']};
var std1={name:'avdhut',standard:12,subject:['Statics','Maths']};

//Insert document
db.collection('students').insert([std1,std2,std3],function(insertErr,result){
if(insertErr)throw err;
	console.log(result)
	client.close();
});

});