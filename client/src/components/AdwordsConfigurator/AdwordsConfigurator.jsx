import React, { useState } from "react";
import { Keywords, Websites, Settings } from "./..";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// import axios from 'axios';

// const callServer = () => {
//   axios.get('http://localhost:8000/test', {
//     params: {
//       table: 'sample',
//     },
//   }).then((response) => {
//     console.log(response.data);
//   });
// }

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    padding: 20,
    backgroundColor: "#243851",
  },
});

export function AdwordsConfigurator() {
  const classes = useStyles();
  const [keywords, updateKeywords] = useState([
    "Word #1",
    "Word #2",
    "Word #3",
    "Word #4",
    "Word #5",
  ]);
  const [websites, updateWebsites] = useState([
    "www.abc.com",
    "www.A2Z.com",
    "www.123.com",
    "www.google.com",
    "www.xyz.com",
    "www.js.com",
  ]);
  const [settings, updateSettings] = useState({
    browsers: {
      chrome: true,
      firefox: false,
      explorer: false,
      safari: true,
      opera: false,
      incognito: true,
    },
    targetSettings: {
      websiteWait1: 20,
      websiteWait2: 50,
      visitPageInSite: false,
      numPages: 10,
      numPagesSec1: 40,
      numPagesSec2: 20,
      postOp1: 30,
      postOp2: 60,
      targetSiteCount: 20,
      targetSiteMins: 10,
      autoReset: 20,
    },
    deviceSettings: {
      deviceReset: true,
      phoneReset: true,
      mobileData: false,
      vinnReset: false,
      flyMode: false,
    },
    browserSettings: {
      removeCookies: true,
      analyticsProtection: false,
      dataSavingsMode: true,
      mouseTracks: true,
      changeResolution: false,
      randomGenerate: false,
      removeHistory: true,
    },
  });
  // let output = "";
  return (
    <Grid container spacing={4} className={classes.container}>
      <Grid item xs={3}>
        <Keywords keywords={keywords} updateKeywords={updateKeywords} />
      </Grid>
      <Grid item xs={3}>
        <Websites websites={websites} updateWebsites={updateWebsites} />
      </Grid>
      <Grid item xs={6}>
        <Settings settings={settings} updateSettings={updateSettings} />
      </Grid>
    </Grid>
  );
}
