import React from "react";
import {
  Card,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Input,
  FormGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";

const useStyles = makeStyles({
  heading: {
    display: "inline-flex",
    alignItems: "center",
    color: "white",
  },
  formControlLabel: {
    margin: "0 auto 0 0",
  },
  formLabel: {
    fontSize: "0.8em",
  },
  browserGrid: {
    display: "inline-flex",
  },
  browsers: {
    backgroundColor: "#253147",
    padding: "5px 15px",
    color: "white",
    flexGrow: 1,
  },
  targetWebsite: {
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "#253147",
    padding: "15px 20px",
    alignItems: "center",
    width: "100%",
    color: "white",
    margin: "5px auto",
  },
  deviceSettings: {
    backgroundColor: "#253147",
    padding: "5px 15px",
    color: "white",
  },
  browserSettings: {
    backgroundColor: "#253147",
    padding: "5px 15px",
    color: "white",
    margin: "5px auto",
  },
  buttonsGrid: {
    display: "inline-flex",
  },
  exportButton: {
    marginLeft: 0,
    minWidth: "30%",
    backgroundColor: "#febd02",
    color: "white",
    fontWeight: "bold",
  },
  stopButton: {
    marginLeft: "auto",
    backgroundColor: "#ff3c2c",
    color: "white",
    fontWeight: "bold",
  },
  startButton: {
    marginLeft: "auto",
    backgroundColor: "#00a94c",
    color: "white",
    fontWeight: "bold",
  },
  saveButton: {
    marginLeft: "auto",
    backgroundColor: "#4a74a2",
    color: "white",
    fontWeight: "bold",
  },
  loadButton: {
    marginLeft: "auto",
    backgroundColor: "#994aa2",
    color: "white",
    fontWeight: "bold",
  },
  inputFields: {
    width: 55,
    color: "white",
    margin: "0px 5px",
    fontWeight: "bold",
    height: "1em",
    padding: "0px 2px 3px",
  },
  checkbox: {
    paddingRight: "5px",
  },
});

export function Settings(props) {
  const classes = useStyles();

  const { settings, updateSettings, buttonHandler } = props;

  const handleChange = (event, group) => {
    const newSettings = { ...settings };
    if (group === "browsers") {
      newSettings.browsers[event.target.value] = event.target.checked;
    } else if (group === "deviceSettings") {
      newSettings.deviceSettings[event.target.value] = event.target.checked;
    } else if (group === "browserSettings") {
      newSettings.browserSettings[event.target.value] = event.target.checked;
    } else if (group === "targetSettings") {
      if (event.target.name === "visitPage")
        newSettings.targetSettings[event.target.value] = event.target.checked;
      else {
        newSettings.targetSettings[event.target.name] =
          event.target.value < 0 ? 0 : event.target.value;
      }
    }
    updateSettings(newSettings);
  };

  return (
    <Grid container direction="column" justify="center">
      <Typography variant="h6" className={classes.heading}>
        <SettingsOutlinedIcon
          style={{ color: "#faba03", marginRight: "10px" }}
        />
        <div>Settings</div>
      </Typography>
      <br />
      <div className={classes.browserGrid}>
        <Card className={classes.browsers}>
          <Grid container>
            <Grid item style={{ paddingRight: "15px" }}>
              <FormControlLabel
                className={classes.formControlLabel}
                control={
                  <Checkbox
                    style={{ color: "#a2842e" }}
                    checked={settings.browsers.chrome || false}
                    onChange={(e) => {
                      handleChange(e, "browsers");
                    }}
                    value="chrome"
                    name="chrome"
                  />
                }
                label={
                  <Typography className={classes.formLabel}>Chrome</Typography>
                }
              />
            </Grid>

            <Grid item style={{ paddingRight: "15px" }}>
              <FormControlLabel
                className={classes.formControlLabel}
                control={
                  <Checkbox
                    style={{ color: "#a2842e" }}
                    checked={settings.browsers.firefox || false}
                    onChange={(e) => {
                      handleChange(e, "browsers");
                    }}
                    value="firefox"
                    name="firefox"
                  />
                }
                label={
                  <Typography className={classes.formLabel}>FireFox</Typography>
                }
              />
            </Grid>

            <Grid item style={{ paddingRight: "15px" }}>
              <FormControlLabel
                className={classes.formControlLabel}
                control={
                  <Checkbox
                    style={{ color: "#a2842e" }}
                    checked={settings.browsers.explorer || false}
                    onChange={(e) => {
                      handleChange(e, "browsers");
                    }}
                    value="explorer"
                    name="explorer"
                  />
                }
                label={
                  <Typography className={classes.formLabel}>
                    Explorer
                  </Typography>
                }
              />
            </Grid>

            <Grid item style={{ paddingRight: "15px" }}>
              <FormControlLabel
                className={classes.formControlLabel}
                control={
                  <Checkbox
                    style={{ color: "#a2842e" }}
                    checked={settings.browsers.safari || false}
                    onChange={(e) => {
                      handleChange(e, "browsers");
                    }}
                    value="safari"
                    name="safari"
                  />
                }
                label={
                  <Typography className={classes.formLabel}>Safari</Typography>
                }
              />
            </Grid>

            <Grid item style={{ paddingRight: "auto" }}>
              <FormControlLabel
                className={classes.formControlLabel}
                control={
                  <Checkbox
                    style={{ color: "#a2842e" }}
                    checked={settings.browsers.opera || false}
                    onChange={(e) => {
                      handleChange(e, "browsers");
                    }}
                    value="opera"
                    name="opera"
                  />
                }
                label={
                  <Typography className={classes.formLabel}>Opera</Typography>
                }
              />
            </Grid>
          </Grid>
        </Card>
        <Card className={classes.browsers}>
          <FormControlLabel
            className={classes.formControlLabel}
            control={
              <Checkbox
                style={{ color: "#a2842e" }}
                checked={settings.browsers.incognito || false}
                onChange={(e) => {
                  handleChange(e, "browsers");
                }}
                value="incognito"
                name="incognito"
              />
            }
            label={
              <Typography className={classes.formLabel}>Incognito</Typography>
            }
          />
        </Card>
      </div>

      <Card className={classes.targetWebsite}>
        <FormGroup row>
          <Typography component={"span"} className={classes.formLabel}>
            Wait
            <Input
              className={classes.inputFields}
              name="websiteWaitMinutes"
              value={settings.targetSettings.websiteWaitMinutes || ""}
              onChange={(e) => {
                handleChange(e, "targetSettings");
              }}
              inputProps={{
                min: 0,
                max: 999,
                type: "number",
              }}
            />
            minutes
            <Input
              className={classes.inputFields}
              name="websiteWaitSeconds"
              value={settings.targetSettings.websiteWaitSeconds || ""}
              onChange={(e) => {
                handleChange(e, "targetSettings");
              }}
              inputProps={{
                min: 0,
                max: 59,
                type: "number",
              }}
            />
            seconds on the target website
          </Typography>
        </FormGroup>
        <br />
        <FormGroup row>
          <FormControlLabel
            className={classes.checkbox}
            control={
              <Checkbox
                style={{ color: "#1a5b9c" }}
                checked={settings.targetSettings.visitPage || false}
                onChange={(e) => {
                  handleChange(e, "targetSettings");
                }}
                value="visitPage"
                name="visitPage"
              />
            }
            label={
              <Typography component={"span"} className={classes.formLabel}>
                Visit the Page within the Site
              </Typography>
            }
          />
        </FormGroup>
        <br />
        <FormGroup row>
          <Input
            className={classes.inputFields}
            name="visitPageCount"
            value={settings.targetSettings.visitPageCount || ""}
            onChange={(e) => {
              handleChange(e, "targetSettings");
            }}
            inputProps={{
              min: 0,
              max: 999,
              type: "number",
            }}
          />
          <Typography component={"span"} className={classes.formLabel}>
            Pages
            <Input
              className={classes.inputFields}
              name="visitPageMinutes"
              value={settings.targetSettings.visitPageMinutes || ""}
              onChange={(e) => {
                handleChange(e, "targetSettings");
              }}
              inputProps={{
                min: 0,
                max: 999,
                type: "number",
              }}
            />
            <Input
              className={classes.inputFields}
              name="visitPageSeconds"
              value={settings.targetSettings.visitPageSeconds || ""}
              onChange={(e) => {
                handleChange(e, "targetSettings");
              }}
              inputProps={{
                min: 0,
                max: 59,
                type: "number",
              }}
            />
            visit from to seconds
          </Typography>
        </FormGroup>
        <br />
        <FormGroup row>
          <Typography component={"span"} className={classes.formLabel}>
            After the operation is complete
            <Input
              className={classes.inputFields}
              name="operationMinutes"
              value={settings.targetSettings.operationMinutes || ""}
              onChange={(e) => {
                handleChange(e, "targetSettings");
              }}
              inputProps={{
                min: 0,
                max: 999,
                type: "number",
              }}
            />
            Pages
            <Input
              className={classes.inputFields}
              name="operationSeconds"
              value={settings.targetSettings.operationSeconds || ""}
              onChange={(e) => {
                handleChange(e, "targetSettings");
              }}
              inputProps={{
                min: 0,
                max: 59,
                type: "number",
              }}
            />
            seconds wait.
          </Typography>
        </FormGroup>
        <br />
        <FormGroup row>
          <Typography component={"span"} className={classes.formLabel}>
            Target site
            <Input
              className={classes.inputFields}
              name="notFoundCount"
              value={settings.targetSettings.notFoundCount || ""}
              onChange={(e) => {
                handleChange(e, "targetSettings");
              }}
              inputProps={{
                min: 0,
                max: 999,
                type: "number",
              }}
            />
            if not found times
            <Input
              className={classes.inputFields}
              name="notFoundWait"
              value={settings.targetSettings.notFoundWait || ""}
              onChange={(e) => {
                handleChange(e, "targetSettings");
              }}
              inputProps={{
                min: 0,
                max: 999,
                type: "number",
              }}
            />
            minutes wait.
          </Typography>
        </FormGroup>
        <br />
        <FormGroup row>
          <Input
            className={classes.inputFields}
            name="autoResetCount"
            value={settings.targetSettings.autoResetCount || ""}
            onChange={(e) => {
              handleChange(e, "targetSettings");
            }}
            inputProps={{
              min: 0,
              max: 100,
              type: "number",
            }}
          />
          <Typography component={"span"} className={classes.formLabel}>
            automatic reset after operation.
          </Typography>
        </FormGroup>
      </Card>

      <br />
      <Card className={classes.deviceSettings}>
        <Grid container>
          <Grid item style={{ paddingRight: "10px" }}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  style={{ color: "#1d7b4e" }}
                  checked={settings.deviceSettings.deviceReset || false}
                  onChange={(e) => {
                    handleChange(e, "deviceSettings");
                  }}
                  value="deviceReset"
                  name="deviceReset"
                />
              }
              label={
                <Typography className={classes.formLabel}>
                  Device Reset
                </Typography>
              }
            />
          </Grid>

          <Grid item style={{ paddingRight: "10px" }}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  style={{ color: "#1d7b4e", fontSize: "0.8em" }}
                  checked={settings.deviceSettings.vinnReset || false}
                  onChange={(e) => {
                    handleChange(e, "deviceSettings");
                  }}
                  value="vinnReset"
                  name="vinnReset"
                />
              }
              label={
                <Typography className={classes.formLabel}>
                  Vinn Reset
                </Typography>
              }
            />
          </Grid>

          <Grid item style={{ paddingRight: "10px" }}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  style={{ color: "#1d7b4e", fontSize: "0.8em" }}
                  checked={settings.deviceSettings.phoneReset || false}
                  onChange={(e) => {
                    handleChange(e, "deviceSettings");
                  }}
                  value="phoneReset"
                  name="phoneReset"
                />
              }
              label={
                <Typography className={classes.formLabel}>
                  Phone Reset
                </Typography>
              }
            />
          </Grid>

          <Grid item style={{ paddingRight: "10px" }}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  style={{ color: "#1d7b4e", fontSize: "0.8em" }}
                  checked={settings.deviceSettings.mobileData || false}
                  onChange={(e) => {
                    handleChange(e, "deviceSettings");
                  }}
                  value="mobileData"
                  name="mobileData"
                />
              }
              label={
                <Typography className={classes.formLabel}>
                  Mobile Data
                </Typography>
              }
            />
          </Grid>

          <Grid item style={{ paddingRight: "auto" }}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  style={{ color: "#1d7b4e", fontSize: "0.8em" }}
                  checked={settings.deviceSettings.flyMode || false}
                  onChange={(e) => {
                    handleChange(e, "deviceSettings");
                  }}
                  value="flyMode"
                  name="flyMode"
                />
              }
              label={
                <Typography className={classes.formLabel}>Fly Mode</Typography>
              }
            />
          </Grid>
        </Grid>
      </Card>

      <Card className={classes.browserSettings}>
        <Grid container>
          <Grid item style={{ paddingRight: "10px" }}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  style={{ color: "#1a5b9c" }}
                  checked={settings.browserSettings.removeCookies || false}
                  onChange={(e) => {
                    handleChange(e, "browserSettings");
                  }}
                  value="removeCookies"
                  name="removeCookies"
                />
              }
              label={
                <Typography className={classes.formLabel}>
                  Remove Cookies
                </Typography>
              }
            />
          </Grid>
          <Grid item style={{ paddingRight: "10px" }}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  style={{ color: "#1a5b9c" }}
                  checked={settings.browserSettings.changeResolution || false}
                  onChange={(e) => {
                    handleChange(e, "browserSettings");
                  }}
                  value="changeResolution"
                  name="changeResolution"
                />
              }
              label={
                <Typography className={classes.formLabel}>
                  Change Resolution
                </Typography>
              }
            />
          </Grid>
          <Grid item style={{ paddingRight: "10px" }}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  style={{ color: "#1a5b9c" }}
                  checked={settings.browserSettings.mouseTracks || false}
                  onChange={(e) => {
                    handleChange(e, "browserSettings");
                  }}
                  value="mouseTracks"
                  name="mouseTracks"
                />
              }
              label={
                <Typography className={classes.formLabel}>
                  Mouse Tracks
                </Typography>
              }
            />
          </Grid>
          <Grid item style={{ paddingRight: "auto" }}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  style={{ color: "#1a5b9c" }}
                  checked={settings.browserSettings.dataSavingMode || false}
                  onChange={(e) => {
                    handleChange(e, "browserSettings");
                  }}
                  value="dataSavingMode"
                  name="dataSavingMode"
                />
              }
              label={
                <Typography className={classes.formLabel}>
                  Data Saving Mode
                </Typography>
              }
            />
          </Grid>
          <Grid item style={{ paddingRight: "10px" }}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  style={{ color: "#1a5b9c" }}
                  checked={settings.browserSettings.randomGenerate || false}
                  onChange={(e) => {
                    handleChange(e, "browserSettings");
                  }}
                  value="randomGenerate"
                  name="randomGenerate"
                />
              }
              label={
                <Typography className={classes.formLabel}>
                  Random Generator
                </Typography>
              }
            />
          </Grid>
          <Grid item style={{ paddingRight: "10px" }}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  style={{ color: "#1a5b9c" }}
                  checked={
                    settings.browserSettings.analyticsProtection || false
                  }
                  onChange={(e) => {
                    handleChange(e, "browserSettings");
                  }}
                  value="analyticsProtection"
                  name="analyticsProtection"
                />
              }
              label={
                <Typography className={classes.formLabel}>
                  Analytics Protection
                </Typography>
              }
            />
          </Grid>

          <Grid item style={{ paddingRight: "auto" }}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  style={{ color: "#1a5b9c" }}
                  checked={settings.browserSettings.removeHistory || false}
                  onChange={(e) => {
                    handleChange(e, "browserSettings");
                  }}
                  value="removeHistory"
                  name="removeHistory"
                />
              }
              label={
                <Typography className={classes.formLabel}>
                  Remove History
                </Typography>
              }
            />
          </Grid>
        </Grid>
      </Card>
      <br />
      <div className={classes.buttonsGrid}>
        <Button
          value="EXPORT"
          variant="contained"
          className={classes.exportButton}
          onClick={() => {
            buttonHandler("EXPORT");
          }}
        >
          Export
        </Button>

        <Button
          value="START"
          variant="contained"
          className={classes.startButton}
          onClick={() => {
            buttonHandler("START");
          }}
        >
          <PlayCircleOutlineOutlinedIcon
            style={{ fontSize: "1.3em", marginRight: "5px" }}
          />
          Start
        </Button>

        <Button
          value="STOP"
          variant="contained"
          className={classes.stopButton}
          onClick={() => {
            buttonHandler("STOP");
          }}
        >
          <PauseCircleOutlineOutlinedIcon
            style={{ fontSize: "1.3em", marginRight: "5px" }}
          />
          Stop
        </Button>
        <Button
          value="SAVE"
          variant="contained"
          className={classes.saveButton}
          onClick={() => {
            buttonHandler("SAVE");
          }}
        >
          <CloudDownloadOutlinedIcon
            style={{ fontSize: "1.3em", marginRight: "5px" }}
          />
          Save
        </Button>
        <Button
          value="LOAD"
          variant="contained"
          className={classes.loadButton}
          onClick={() => {
            buttonHandler("LOAD");
          }}
        >
          <BackupOutlinedIcon
            style={{ fontSize: "1.3em", marginRight: "5px" }}
          />
          Load
        </Button>
      </div>
    </Grid>
  );
}
