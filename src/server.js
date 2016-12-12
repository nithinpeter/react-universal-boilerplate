import 'babel-polyfill';
import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import { ServerRouter, createServerRenderContext } from 'react-router'
import path from 'path';

//**//
import App from "./App"

const app = express()

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('*', function (req, res) {
  
  const context = createServerRenderContext()

  const markup = renderToString(
      <ServerRouter
        location={req.url}
        context={context}
      >
        <App/>
      </ServerRouter>
    )
  res.send(`<html>
    <head></head>
    <body>
      <div id="root">${markup}</div>
      <script src="/main.js"></script>
    </body>
  </html>`
  );
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})