import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Avatar from "./ImageAvatars";
import { YoutubePlayer } from "reactjs-media";
import VidioDiscription from "./VidioDiscription";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import VisibilitySharpIcon from "@material-ui/icons/VisibilitySharp";
import TemporaryDrawer from "./TemporaryDrawer";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import $ from "jquery";

const useStyles = makeStyles({
  root: {
    maxWidth: "300",
    height: "auto",
  },
});

export default function VisdeoCard(props) {
  const classes = useStyles();
  const [size, setSize] = useState({ width: "200px", height: "200px" });
  const [url, setUrl] = useState("");
  const sizeChange = () => {
    setSize({ ...size, width: "100%", height: "100%" });
  };

  const removeImage = (id) => {
    var tagId = "#" + id;
    $(tagId).hide();
    setUrl(id); //this is a url
    sizeChange();
    // var myobj = document.getElementById("imageTag");
      };
  const addImage = (id) => {
    var tagId = "#" + id;
    $(tagId).show();
    //var myobjp = document.getElementById("imageTag");
    // myobjp.add();
  };
const gotoVideo = ()=>{
  
}
  /*
  useEffect(() => {
    //remove the vidios when page loading
   // $("#vidioTagId").hide();
  }, []);
*/
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        position: "relative",
        textAlign: "left",
      }}
    >
      <Card className={classes.root}>
        <CardActionArea
          onClick={sizeChange}
          style={{ width: "100%" }}
          onMouseLeave={() => {
           /* addImage(props.id);*/
          }}
        >
          <div

            onMouseEnter={() => {
            /*  removeImage(props.id);*/
            }}
            id="new"
          >
            <Link to={"/vidio?vId="+props.id}></Link>
            <a href={"/vidio?vId=" + props.id} >
              <img
                width="100%"
                height="100%"
                src={props.chanelimage}
                alt={props.vidio}
                id={props.id}
                onClick={gotoVideo}
              />
            </a>

          </div>

          <CardContent>
            <Avatar image={props.chanelimage} />
            <p>{props.chanelname}</p>
            <Typography gutterBottom component="p">
              <ThumbUpAltIcon /> {props.like}
            </Typography>
            <Typography gutterBottom component="p">
              <ThumbDownAltIcon /> {props.dislike}
            </Typography>
            <Typography gutterBottom component="p">
              <VisibilitySharpIcon /> {props.view}
            </Typography>
            {/* <Typography gutterBottom component="p">
              <FavoriteIcon /> {props.favoriteCount}
      </Typography>*/}
            <Typography gutterBottom component="p">
              <ChatRoundedIcon /> {props.commentCount}
            </Typography>
            <div
              style={{
                width: "100%",
                height: "  00px",
                overflow: "scroll",
              }}
            >
              <VidioDiscription discriptiondata={props.discription} />
            </div>

            {/*  <MoreVertIcon /> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
