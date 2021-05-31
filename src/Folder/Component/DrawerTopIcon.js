import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { YoutubePlayer } from "reactjs-media";
import MenuIcon from "@material-ui/icons/Menu";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CallIcon from "@material-ui/icons/Call";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import HomeIcon from "@material-ui/icons/Home";
import IMG from "./img.jpg";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerTopIcon(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <img
            alt="img"
            src={
              IMG ||
              "https://media-exp1.licdn.com/dms/image/D4D35AQE-r6LXrTEHLQ/profile-framedphoto-shrink_400_400/0/1621220604162?e=1622124000&v=beta&t=IhB2QeexmAo0RzeIDZ95HQCrdEx5xA1ambV5QIAtAqc"
            }
            width="100%"
            height="300px"
          />
        </div>
        <h1
          className="text-center p-2"
          style={{
            color: "red",
            fontWeight: "900",
          }}
        >
          <span
            style={{
              color: "blue",
              fontWeight: "900",
            }}
          >
            vTube
          </span>
        </h1>
        <h4
          className="text-center p-1"
          style={{
            color: "black",
            fontWeight: "900",
            fontStyle: "italic",
          }}
        >
          vTube will be a Futuer Latest video Streaming platform.
        </h4>
        <h5
          className="text-left p-1"
          style={{
            color: "black",
            fontWeight: "900",
          }}
        >
          Any one can search videos and enjoy with your family..
        </h5>

        <a
          className="text-center text-dark"
          href="https://www.linkedin.com/in/savindu-pasintha-6287a31a4/"
        >
          <LinkedInIcon
            style={{
              color: "blue",
              fontWeight: "900",
            }}
          />{" "}
          <span> </span>
          <span
            style={{
              color: "black",
              fontWeight: "900",
            }}
          >
            {" "}
            LinkedIn
          </span>
        </a>
        <br />
        <a
          className="text-center text-dark"
          href="https://github.com/savindu-pasintha"
        >
          <GitHubIcon /> <span> </span>{" "}
          <span
            style={{
              color: "dark",
              fontWeight: "900",
            }}
          >
            {" "}
            gitHub{" "}
          </span>
        </a>
        <br />
        <a className="text-center text-dark" href="call/wahtsapp">
          {" "}
          <WhatsAppIcon
            style={{
              color: "blue",
              fontWeight: "900",
            }}
          />{" "}
          <span> </span>{" "}
          <span
            style={{
              color: "dark",
              fontWeight: "900",
            }}
          >
            {" "}
            + 94 76 875 57 87
          </span>
        </a>
        <br />
        <a className="text-center text-dark" href="Address">
          {" "}
          <HomeIcon /> <span> </span>
          <span
            style={{
              color: "black",
              fontWeight: "900",
            }}
          >
            {" "}
            Kaluthara, Western Province, Sri Lanka.{" "}
          </span>
        </a>
        <br />
        <a className="text-center text-dark" href="email">
          <MailIcon
            style={{
              color: "blue",
              fontWeight: "900",
            }}
          />
          <span> </span>
          <span
            style={{
              color: "black",
              fontWeight: "900",
            }}
          >
            {" "}
            savindupasingtha@gmail.com{" "}
          </span>
        </a>
        <h6
          className="text-center p-1"
          style={{
            color: "black",
            fontWeight: "900",
          }}
        >
          This platform Build By "Savindu pasingtha"
        </h6>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon
              style={{
                color: "black",
                fontSize: "35px",
                fontWeight: "900",
                fontStyle: "italic",
              }}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
