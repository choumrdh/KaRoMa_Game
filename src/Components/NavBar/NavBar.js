import React from "react";
import Link from '@material-ui/core/Link';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  },
  title: {
    flexGrow: 1,
    
  },
}));
const NavBar = () => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link style={{color:"white"}} href="/">KaRoMa</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
