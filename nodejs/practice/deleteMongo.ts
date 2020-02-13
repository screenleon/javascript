// import * as mongoose from 'mongoose';
import {mongo} from 'mongoose'
const mongoClient = mongo.MongoClient;
const url = 'mongodb://localhost/';
// const conn = mongoose.createConnection('mongodb://localhost/');

mongoClient.connect(url, function(err, client) {
    if (err) {
        console.log('Sorry unable to connect to MongoDB Error:', err);
    } else {

        
        let db = client.db('dbName');
        let collection = db.collection('collectionName');
 
        collection.deleteMany({}, function(err, results){
            console.log(results.result);
        });
 
        client.close();
    }
});