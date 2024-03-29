const express = require("express");
const { ApolloServer } = require("@apollo/server");
const {expressMiddleware} = require("@apollo/server/express4")
const path = require("path");

const {typeDefs, resolvers} = require('./schemas');
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    await server.start();

    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    if (process.env.NODE_ENV === "production")
}