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
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
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
    backgroundColor: "#0386f9",
    padding: "5px 8px",
    minWidth: "45px"
  },
  heading: {
    display: "inline-flex",
    alignItems: "center",
    color: "white"
  }
});



export function Keywords(props) {
  const classes = useStyles();

  const {keywords, updateKeywords} = props;

  const [newKeyword, setNewKeyword] = useState("");

  const addKeyword = () => {
    updateKeywords([...keywords, newKeyword])
    setNewKeyword("");
  }

  const deleteKeyword = (index) => {
    updateKeywords([...keywords.slice(0,index), ...keywords.slice(index+1)])
  }

  const updateField = (e) => {
    setNewKeyword(e.target.value);
  }

  return (
    <Grid container direction='column' justify='center'>
        <Typography variant='h5' className={classes.heading}>
          <LabelOutlinedIcon fontSize="large" style={{ color: "#0284f4", marginRight:"10px" }}/>
          <div>Keywords</div>
        </Typography>
      <br />
      <Card className={classes.card}>
        <Paper className={classes.paper}>
          <InputBase
            className={classes.input}
            placeholder='Enter new keyword'
            value={newKeyword}
            onChange={updateField}
            inputProps={{ "aria-label": "add keywords" }}
          />
          <Button variant="contained" className={classes.addButton}
            onClick={addKeyword} disabled={!newKeyword}
          >
            <AddCircleOutlineIcon />
      </Button>
        </Paper>
      </Card>
      <Grid container direction='column' justify='center' alignItems='center'>
        {keywords.length ? keywords.map((word, index) => (
          <Card className={classes.word} key={index}>
            {word}
            <IconButton variant='outlined' className={classes.clearButton}
              onClick={() => deleteKeyword(index)}
            >
              <RemoveCircleOutlineOutlinedIcon style={{fontSize: "0.8em"}}/>
            </IconButton>
          </Card>
        )):
        <Card className={classes.noWord}>
            No Keywords added
          </Card>
        }
      </Grid>
    </Grid>
  );
}
