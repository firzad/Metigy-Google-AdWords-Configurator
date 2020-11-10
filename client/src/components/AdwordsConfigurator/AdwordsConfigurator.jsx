import React, { useState } from "react";
import { Keywords, Websites, Settings } from "./..";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const dummyData = {};

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    padding: 20,
    backgroundColor: "#243851",
  },
});

export function AdwordsConfigurator() {
  const userId = 1;
  const classes = useStyles();
  const toastProp = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: 0,
  };

  const [keywords, updateKeywords] = useState([]);
  const [websites, updateWebsites] = useState([]);
  const [settings, updateSettings] = useState({
    browsers: {},
    targetSettings: {},
    deviceSettings: {},
    browserSettings: {},
  });

  const loadConfig = (userId) => {
    axios
      .get("http://localhost:8000/load", {
        params: {
          userId,
        },
      })
      .then(({ data }) => {
        const loadedKeywords = [...data.data.keywords];
        const loadedWebsites = [...data.data.websites];
        const loadedSettings = { ...data.data.settings };
        updateKeywords(loadedKeywords);
        updateWebsites(loadedWebsites);
        updateSettings(loadedSettings);
        
        if(data.status === 201) {
          toast.success("Default Configuration Loaded Successfully!", toastProp);
        } else {
          toast.success("User Configuration Loaded Successfully!", toastProp);
        }

      });
  };

  const saveConfig = (data) => {
    axios.post("http://localhost:8000/save", data).then((response) => {
      if (response.data) {
        toast.success("Configuration Saved Successfully!",toastProp);
      } else {
        toast.error("Error! Configuration Load Failed", toastProp);
      }
    });
  };

  // loadConfig(userId);

  const buttonHandler = (btnAction) => {
    if (btnAction === "EXPORT") {
      toast.info("EXPORT Action", toastProp);
    } else if (btnAction === "START") {
      toast.info("START Action", toastProp);
    } else if (btnAction === "STOP") {
      toast.info("STOP Action", toastProp);
    } else if (btnAction === "SAVE") {
      const adConfigModel = {
        userId: 1,
        keywords,
        websites,
        settings,
      };
      saveConfig(adConfigModel);
    } else if (btnAction === "LOAD") {
      loadConfig(userId);
    }
  };
  // let output = "";
  return (
    <div>
      <Grid container spacing={4} className={classes.container}>
        <Grid item xs={3}>
          <Keywords keywords={keywords} updateKeywords={updateKeywords} />
        </Grid>
        <Grid item xs={3}>
          <Websites websites={websites} updateWebsites={updateWebsites} />
        </Grid>
        <Grid item xs={6}>
          <Settings
            settings={settings}
            updateSettings={updateSettings}
            buttonHandler={buttonHandler}
          />
        </Grid>
        <div style={{minHeight: "100%"}}></div>
      </Grid>
      <ToastContainer/>

    </div>
  );
}
