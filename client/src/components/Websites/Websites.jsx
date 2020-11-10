import React, {
  useState,
  // useEffect
} from "react";
import {
  IconButton,
  Button,
  Card,
  Grid,
  InputBase,
  Paper,
  Typography
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DesktopWindowsOutlinedIcon from '@material-ui/icons/DesktopWindowsOutlined';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';

const useStyles = makeStyles({
  card: {
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "#253147",
    margin: "0 0 5px 0",
    padding: 20,
    alignItems: "center",
    width: "100%"
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: "0.9em"
  },
  word: {
    boxSizing: "border-box",
    margin: "0 auto 0 auto",
    padding: 16,
    backgroundColor: "#253147",
    color: "white",
    width: "100%",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "0.9em"
  },
  noWord: {
    boxSizing: "border-box",
    margin: "-5px auto 0 auto",
    padding: 22,
    backgroundColor: "#253147",
    color: "grey",
    width: "100%",
    height: 60,
    display: "flex",
    fontSize: "0.8em"
  },
  clearButton: {
    color: "#fb1c0c",
    padding: "5px 8px",
    minWidth: "35px"
  },
  addButton: {
    color: "white",
    backgroundColor: "#00a94c",
    padding: "5px 8px",
    minWidth: "45px"
  },
  heading: {
    display: "inline-flex",
    alignItems: "center",
    color: "white"
  }
});



export function Websites(props) {
  const classes = useStyles();

  const {websites, updateWebsites} = props;

  const [newWebsite, setNewWebsite] = useState("");

  const addWebsite = () => {
    // eslint-disable-next-line
    const urlRegex = /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if(urlRegex.test(newWebsite)){
      updateWebsites([...websites, newWebsite])
    } else {
      //
    }
    setNewWebsite("");

  }

  const deleteWebsite = (index) => {
    updateWebsites([...websites.slice(0,index), ...websites.slice(index+1)])
  }

  const updateField = (e) => {
    setNewWebsite(e.target.value);
  }

  return (
    <Grid container direction='column' justify='center'>
        <Typography variant='h5' className={classes.heading}>
          <DesktopWindowsOutlinedIcon fontSize="large" style={{ color: "#00a94c", marginRight:"10px" }}/>
          <div>Websites</div>
        </Typography>
      <br />
      <Card className={classes.card}>
        <Paper className={classes.paper}>
          <InputBase
            className={classes.input}
            placeholder='Enter new website'
            value={newWebsite}
            onChange={updateField}
            inputProps={{ "aria-label": "add websites" }}
          />
          <Button variant="contained" className={classes.addButton}
            onClick={addWebsite} disabled={!newWebsite}
          >
            <AddCircleOutlineIcon />
      </Button>
        </Paper>
      </Card>
      <Grid container direction='column' justify='center' alignItems='center'>
        {websites.length ? websites.map((word, index) => (
          <Card className={classes.word} key={index}>
            {word}
            <IconButton variant='outlined' className={classes.clearButton}
              onClick={() => deleteWebsite(index)}
            >
              <RemoveCircleOutlineOutlinedIcon style={{fontSize: "0.8em"}}/>
            </IconButton>
          </Card>
        )):
        <Card className={classes.noWord}>
            No Websites added
          </Card>
        }
      </Grid>
    </Grid>
  );
}
