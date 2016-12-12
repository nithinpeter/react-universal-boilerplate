import "babel-polyfill";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

//**//
import App from "./App"

const app = express()

app.get('/', function (req, res) {
  res.send(ReactDOMServer.renderToString(<App/>));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})