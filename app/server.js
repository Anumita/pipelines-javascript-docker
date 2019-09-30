'use strict';

const express = require('express');
const appInsights = require("applicationinsights");

const PORT = 8080;
const HOST = '0.0.0.0';
appInsights.setup("83eba91c-9953-4fbf-8267-cad4d4d1f397");
appInsights.start();

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);