const cors = require('cors');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(cors());
app.use(bodyParser.json());

app.use((err, _req, res, next) => {
  // body-parser sets status to 400 for failed JSON Parsing
  if (err.status === 400)
    return res.status(err.status).json({
      "error": "Could not decode request: JSON parsing failed"
    });

  // if it's not a 400, default error handling.
  return next(err);
});

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});

const dummyData = {
  userId: 1,
  keywords: [
    "Word #1",
    "Word #2",
    "Word #3",
    "Word #4",
    "Word #5",
  ],
  websites: [
    "www.abc.com",
    "www.A2Z.com",
    "www.123.com",
    "www.google.com",
    "www.xyz.com",
    "www.js.com",
  ],
  settings: {
    browsers: {
      chrome: false,
      firefox: false,
      explorer: false,
      safari: false,
      opera: false,
      incognito: false,
    },
    targetSettings: {
      websiteWaitMinutes: 0,
      websiteWaitSeconds: 0,
      visitPage: false,
      visitPageCount: 0,
      visitPageMinutes: 0,
      visitPageSeconds: 0,
      operationMinutes: 0,
      operationSeconds: 0,
      notFoundCount: 0,
      notFoundWait: 0,
      autoResetCount: 0,
    },
    deviceSettings: {
      deviceReset: false,
      phoneReset: false,
      mobileData: false,
      vinnReset: false,
      flyMode: false,
    },
    browserSettings: {
      removeCookies: false,
      analyticsProtection: false,
      dataSavingMode: false,
      mouseTracks: false,
      changeResolution: false,
      randomGenerate: false,
      removeHistory: false,
    },
  }
}

app.post('/save', (req, res) => {
  const dataSet = req.body;
  if (!dataSet) {
    return res.status(400).json({
      "error": "Could not decode request: JSON parsing failed"
    });
  }
  const keywords = JSON.stringify(dataSet.keywords);
  const websites = JSON.stringify(dataSet.websites);
  const settings = JSON.stringify(dataSet.settings);
  pool.query(`SELECT * FROM AdwordsConfig WHERE userId = ${dataSet.userId}` , (err, results) => {
    if (err) {
      return res.send(false);
    } else if(results.length > 0) {
      pool.query(`UPDATE AdwordsConfig SET keywords = '${keywords}', websites = '${websites}', settings = '${settings}' WHERE userId = ${dataSet.userId}`, (err, results) => {
        if (err) {
          return res.send(false);
        }
        return res.send(true);
      });
    } else {
      pool.query(`INSERT INTO AdwordsConfig VALUES (1,'${keywords}', '${websites}', '${settings}')`, (err, results) => {
        if (err) {
          return res.send(false);
        }
        return res.send(true);
      });
    }
  });
});



app.get('/load', (req, res) => {
  const { userId } = req.query;

  pool.query(`SELECT * FROM AdwordsConfig WHERE userId = ${userId}`, (err, results) => {
    if (err) {
      return res.json({
        status: 200,
        data: dummyData,
        message: "Default Config Loaded"
      });
    } else if(results.length > 0) {
      const resultData = {
        userId: results[0].userId,
        keywords: JSON.parse(results[0].keywords),
        websites: JSON.parse(results[0].websites),
        settings: JSON.parse(results[0].settings),
      }
      return res.json({
        status: 200,
        data: resultData,
        message: "User Config Loaded"
      });
    } else {
      return res.json({
        status: 200,
        data: dummyData,
        message: "Default Config Loaded"
      });
    }
  });
});