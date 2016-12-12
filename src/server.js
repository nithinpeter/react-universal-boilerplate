import "babel-polyfill";
import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import { ServerRouter, createServerRenderContext } from 'react-router'

//**//
import App from "./App"



const app = express()

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
  res.send(markup);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})