import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import {Link} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";


const SwipeableTemporaryDrawer = () => {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({...state, left: open});
  };

  const list = () => (
    <div>
      <div style={{marginTop: "50px"}}>
        <List>
          {["About", "Example", "Resources"].map((text, index) => (
            <Link to={`/${text}`} key={text}>
              <ListItem>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer("left", true)}>
        <MenuIcon style={{color: "white"}} />
      </IconButton>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </>
  );
};

export default SwipeableTemporaryDrawer;
