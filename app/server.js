'use strict';

const express = require('express');
const appInsights = require("applicationinsights");
const PORT = 8080;
const HOST = '0.0.0.0';

appInsights.setup("83eba91c-9953-4fbf-8267-cad4d4d1f397");
appInsights.start();
process.env['NODE_DEBUG'] = 'net,tls';

let client = appInsights.getClient("83eba91c-9953-4fbf-8267-cad4d4d1f397");

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low)
}

const app = express();
app.get('/', (req, res) => {
  if (randomInt(1, 100) > 30)
  {
    client.trackMetric({name: "custom_status", value: "bad"});
    res.status(500).send('Internal Error\n');
  }
  else
  {
    client.trackMetric({name: "custom_status", value: "good"});
    res.status(200).send('Hello world\n');
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
