const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const URI = 'mongodb+srv://Instinktaz:Instinktaz123@cluster0-5yy7r.mongodb.net/graphql-tutorial?retryWrites=true&w=majority';

const app = express();
const PORT = 3005;



app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,

}));

const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('database connected');
};
connectDB();




app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server started!');
});