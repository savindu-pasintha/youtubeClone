import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "./Component/search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ImageAvatars from "./Component/ImageAvatars";
import TemporaryDrawer from "./Component/TemporaryDrawer";
import { YoutubePlayer } from "reactjs-media";
import DrawerTopIcon from "./Component/DrawerTopIcon";

import "./CSS/Header.css";

function Header() {
  return (
    <div className="header" style={{ width: "100%", height: "auto" }}>
      <div style={{ width: "100%", height: "auto" }}>
        <div className="row" style={{ width: "100%", height: "auto" }}>
          <div
            className="col-6"
            style={{ width: "50%", height: "auto", position: "relative" }}
          >
            <h1
              style={{
                color: "#e40017",
                fontSize: "35px",
                fontWeight: "900",
                fontStyle: "italic",
              }}
            >
              Future
            </h1>

            <DrawerTopIcon />
          </div>
          <div
            className="col-6"
            style={{ width: "50%", height: "auto", position: "relative" }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "25px",
                float: "right",
              }}
            >
              <div>
                <h1
                  style={{
                    color: "black",
                    fontSize: "25px",
                    fontWeight: "900",
                    padding: "25px",
                  }}
                >
                  <span>vTube</span> Powered By{" "}
                </h1>
              </div>
              <div>
                <img
                  alt="youtubeicon"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                  width="150px"
                  height="60px"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "auto" }}>
          <div
            className="text-center"
            style={{
              width: "100%",
              height: "auto",
              paddingBottom: "50px",
              position: "relative",
            }}
          >
            <Search />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
