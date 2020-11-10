import React from "react";
import {
  Card,
  Grid,
  // Switch,
  Box,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const useStyles = makeStyles({
  heading: {
    display: "inline-flex",
    alignItems: "center",
    color: "white",
  },
  formLabel:{
    margin: "0 auto 0 0",
    fontSize:"0.8em"
  },
  browsers: {
    backgroundColor: "#253147",
    padding: 15,
    color: "white",
  },
  targetWebsite: {
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "#253147",
    margin: "0 auto",
    padding: 20,
    alignItems: "center",
    width: "100%",
    color: "white",
  },
  deviceSettings: {
    backgroundColor: "#253147",
    padding: 15,
    color: "white",
  },
  browserSettings: {
    backgroundColor: "#253147",
    padding: 15,
    color: "white",
  },
  buttons: {
    display: "flex",
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "#253147",
    margin: "0 auto",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    color: "white",
  },
  exportButton: {
    marginLeft: "30px",
    backgroundColor: "#febd02",
    color: "white",
  },
  stopButton: {
    marginLeft: "30px",
    backgroundColor: "#0386f9",
    color: "white",
  },
  startButton: {
    marginLeft: "30px",
    backgroundColor: "#00a94c",
    color: "white",
  },
  input: {
    width: 42,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  checkbox: {
    marginLeft: 30,
  },
});

export function Settings(props) {
  const classes = useStyles();

  const { settings, updateSettings } = props;

const handleChange = (event, group) => {
  const newSettings = {...settings};
  if(group === 'browsers'){
    newSettings.browsers[event.target.value] = event.target.checked;
  } else if (group === 'deviceSettings'){
    newSettings.deviceSettings[event.target.value] = event.target.checked;
  } else if (group === 'browserSettings'){
    newSettings.browserSettings[event.target.value] = event.target.checked;
  } else if (group === 'targetSettings') {
    newSettings.targetSettings[event.target.value] = event.target.checked;
  }
  updateSettings({ ...newSettings});

};

  return (
    <Grid container direction="column" justify="center">
      <Typography variant="h5" className={classes.heading}>
        <SettingsOutlinedIcon
          fontSize="large"
          style={{ color: "#faba03", marginRight: "10px" }}
        />
        <div>Settings</div>
      </Typography>
      <br />
      <Grid container spacing={1}>
        <Grid item>
          <Card className={classes.browsers}>
            <FormGroup row>
              <Box sx={{ border: '1px dashed black' }}>
                <FormControlLabel className={classes.formLabel}
                  control={
                    <Checkbox  style={{color:"#a2842e"}}
                      checked={settings.browsers.chrome}
                      onChange={(e) => {handleChange(e, "browsers")}}
                      value="chrome"
                      name="chrome"
                    />
                  }
                  label="Chrome"
                />
              </Box>
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#a2842e", fontSize:"0.8em"}}
                      checked={settings.browsers.firefox}
                      onChange={(e) => {handleChange(e, "browsers")}}
                      value="firefox" name="firefox"
                    />
                }
                label="FireFox"
              />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#a2842e", fontSize:"0.8em"}}
                      checked={settings.browsers.explorer}
                      onChange={(e) => {handleChange(e, "browsers")}}
                      value="explorer" name="explorer"
                    />
                }
                label="Explorer"
              />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#a2842e", fontSize:"0.8em"}}
                      checked={settings.browsers.safari}
                      onChange={(e) => {handleChange(e, "browsers")}}
                      value="safari" name="safari"
                    />
                }
                label="Safari"
              />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#a2842e", fontSize:"0.8em"}}
                      checked={settings.browsers.opera}
                      onChange={(e) => {handleChange(e, "browsers")}}
                      value="opera" name="opera"
                    />
                }
                label="Opera"
              />
            </FormGroup>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.browsers}>
          <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#a2842e", fontSize:"0.8em"}}
                      checked={settings.browsers.incognito}
                      onChange={(e) => {handleChange(e, "browsers")}}
                      value="incognito" name="incognito"
                    />
                }
                label="Incognito"
              />
          </Card>
        </Grid>
      </Grid>
      <br />


      
      <Grid container spacing={1}>
        <Grid item>
          <Card className={classes.targetWebsite}>
          </Card>
        </Grid>
      </Grid>

      <br />
      <Grid container>
        <Grid item>
          <Card className={classes.deviceSettings}>
            <FormGroup row>
                <FormControlLabel className={classes.formLabel}
                  control={
                    <Checkbox  style={{color:"#1d7b4e"}}
                      checked={settings.deviceSettings.deviceReset}
                      onChange={(e) => {handleChange(e, "deviceSettings")}}
                      value="deviceReset"
                      name="deviceReset"
                    />
                  }
                  label="Device Reset"
                />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#1d7b4e", fontSize:"0.8em"}}
                      checked={settings.deviceSettings.vinnReset}
                      onChange={(e) => {handleChange(e, "deviceSettings")}}
                      value="vinnReset" name="vinnReset"
                    />
                }
                label="Vinn Reset"
              />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#1d7b4e", fontSize:"0.8em"}}
                      checked={settings.deviceSettings.phoneReset}
                      onChange={(e) => {handleChange(e, "deviceSettings")}}
                      value="phoneReset" name="phoneReset"
                    />
                }
                label="Phone Reset"
              />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#1d7b4e", fontSize:"0.8em"}}
                      checked={settings.deviceSettings.mobileData}
                      onChange={(e) => {handleChange(e, "deviceSettings")}}
                      value="mobileData" name="mobileData"
                    />
                }
                label="Mobile Data"
              />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#1d7b4e", fontSize:"0.8em"}}
                      checked={settings.deviceSettings.flyMode}
                      onChange={(e) => {handleChange(e, "deviceSettings")}}
                      value="flyMode" name="flyMode"
                    />
                }
                label="Fly Mode"
              />
            </FormGroup>
          </Card>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item>
          <Card className={classes.browserSettings}>
            <FormGroup row>
                <FormControlLabel className={classes.formLabel}
                  control={
                    <Checkbox  style={{color:"#1d7b4e"}}
                      checked={settings.browserSettings.removeCookies}
                      onChange={(e) => {handleChange(e, "browserSettings")}}
                      value="removeCookies"
                      name="removeCookies"
                    />
                  }
                  label="Remove Cookies"
                />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#1d7b4e", fontSize:"0.8em"}}
                      checked={settings.browserSettings.changeResolution}
                      onChange={(e) => {handleChange(e, "browserSettings")}}
                      value="changeResolution" name="changeResolution"
                    />
                }
                label="Change Resolution"
              />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#1d7b4e", fontSize:"0.8em"}}
                      checked={settings.browserSettings.mouseTracks}
                      onChange={(e) => {handleChange(e, "browserSettings")}}
                      value="mouseTracks" name="mouseTracks"
                    />
                }
                label="Mouse Tracks"
              />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#1d7b4e", fontSize:"0.8em"}}
                      checked={settings.browserSettings.dataSavingMode}
                      onChange={(e) => {handleChange(e, "browserSettings")}}
                      value="dataSavingMode" name="dataSavingMode"
                    />
                }
                label="Data Saving Mode"
              />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#1d7b4e", fontSize:"0.8em"}}
                      checked={settings.browserSettings.randomGenerate}
                      onChange={(e) => {handleChange(e, "browserSettings")}}
                      value="randomGenerate" name="randomGenerate"
                    />
                }
                label="Random Generator"
              />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#1d7b4e", fontSize:"0.8em"}}
                      checked={settings.browserSettings.analyticsProtection}
                      onChange={(e) => {handleChange(e, "browserSettings")}}
                      value="analyticsProtection" name="analyticsProtection"
                    />
                }
                label="Analytics Protection"
              />
              <FormControlLabel className={classes.formLabel}
                control={
                  <Checkbox style={{color:"#1d7b4e", fontSize:"0.8em"}}
                      checked={settings.browserSettings.removeHistory}
                      onChange={(e) => {handleChange(e, "browserSettings")}}
                      value="removeHistory" name="removeHistory"
                    />
                }
                label="Remove History"
              />
            </FormGroup>
          </Card>
        </Grid>
      </Grid>
      
    
    </Grid>
  );
}
