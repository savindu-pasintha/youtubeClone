import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import VideoCard from "./VidioCard";
import JK from "../YoutubeApi/jk";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "auto",
    },
  },
}));

const text = { width: "auto" };
const searchsty = { width: "30px", height: "30px" };

export default function Search() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchDataKey, setSearchDataKey] = useState([]);
  
  const classes = useStyles();

  const getValue = async (e) => {
    setSearch(e.target.value);
    //console.log(search);
    newdata(); 
  };

  const onsubmitpreventrefresh = (e) => {
    e.preventDefault();
  };
  const keyboardkey = async (event) => {
    if (event.key === "Enter") {
      /* https://youtube.googleapis.com/
    youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=chartUnspecified&hl=hai&id=10&locale=hhh&maxHeight=78&maxResults=78&maxWidth=7&myRating=none&onBehalfOfContentOwner=jjj&pageToken=jj&regionCode=US&videoCategoryId=jj&key=[YOUR_API_KEY] HTTP/1.1
*/
      try {
        var url =
          "https://www.googleapis.com/youtube/v3/search?part=snippet,contentDetails,statistics&order=date&maxResults=100&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8&q=" +
          search;
        url =
          "https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=LK&type=video&videoType=any&order=date&maxResults=48&key=AIzaSyDQSURwrKUwOPdaHm0frk9o-mNlqqgKzFA&q=" +
          +search;
          url=
          "https://www.googleapis.com/youtube/v3/search?maxResults=100&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8&part=snippet&q="+search;
        await axios
          .get(url)
          .then((response) => {
            //console.log(search);

            if (response.data.length == 0) {
              var o = new JK();
              var index = Math.round(Math.random() * 10);
              var p = o.dataSet[index].items; //variable
              setSearchData(p);
              console.log("no data");
            } else {
              var pp = response.data.items; //variable
              setSearchDataKey(pp);
             // console.log(response.data.items);
              console.log("responce data data");
            }
          })
          .catch((error) => {
            throw error;
          });
      } catch (e) {
        console.log(e);
      }
    }else{
      var o = new JK();
      var index = Math.round(Math.random() * 10);
      var p = o.dataSet[index].items; //variable
      setSearchData(p);
    }
    // console.log("13");
  };

  const newdata = () =>{
    var o = new JK();
    var index = Math.round(Math.random() * 10);
    var p = o.dataSet[index].items; //variable
    setSearchData(p);
  }

  useEffect(() => {
  //call
   // keyboardkey();
    
  }, [search]);

  const searchList = searchData.map((s) => {
  // console.log("sid",s.id);
   var x = s.id ;
    return (
      <div
        className="col-sm-12 col-md-3 col-lg-3"
        style={{ width: "100%", position: "relative", padding: "10px" }}
      >
        <VideoCard
          id={x}
          vidio={"https://www.youtube.com/watch?v=" + s.id}
          chanelname={s.snippet.title}
          discription={s.snippet.description}
          chanelimage={s.snippet.thumbnails.high.url}
          
          like={s.statistics.likeCount}
          view={s.statistics.viewCount}
          dislike={s.statistics.dislikeCount}
          commentCount={s.statistics.commentCount}
          favoriteCount={s.statistics.favoriteCount}
        
        
        />
      </div>
    );
  });
  const searchListAfetrEnter = searchDataKey.map((s) => {
   // console.log("sid",s.id.videoId);
    var a = Math.round(Math.random() * 1000);
    var b = Math.round(Math.random() * 1000);
    var c = Math.round(Math.random() * 1000);
    var d = Math.round(Math.random() * 1000);
    var e = Math.round(Math.random() * 1000);

    return (
      <div
        className="col-sm-12 col-md-3 col-lg-3"
        style={{ width: "100%", position: "relative", padding: "10px" }}
      >
        <VideoCard
          id={s.id.videoId}
          vidio={"https://www.youtube.com/watch?v=" + s.id}
          chanelname={s.snippet.title}
          discription={s.snippet.description}
          chanelimage={s.snippet.thumbnails.high.url}
          like={a}
          view={b}
          dislike={c}
          commentCount={d}
          favoriteCount={e}
        
        
        />
      </div>
    );
  });

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onsubmitpreventrefresh}
      >
        <div style={{ display: "inline-flex", width: "100%" }}>
          <div
            style={{
              width: "100%",
              height: "auto",
              padding: "15px",
            }}
          >
            <input
              type="text"
              onChange={getValue}
              id="outlined-basic"
              placeholder="search"
              style={{
                width: "75%",
                height: "55px",
                color: "black",
                fontSize: "24px",
                fontWeight: "600",
                borderRadius: "0px",
                style: "none",
              }}
              onKeyUp={keyboardkey}
            />
          </div>
        </div>
      </form>
     
      <div className="row" style={{ width: "100%", textAlign: "center" }}>
        {searchListAfetrEnter}
      </div>

      <div className="row" style={{ width: "100%", textAlign: "center" }}>
        {searchList}
      </div>
    </div>
  );
}
