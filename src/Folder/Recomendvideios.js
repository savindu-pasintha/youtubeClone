import React, { useEffect, useState } from "react";
import VideoCard from "../Folder/Component/VidioCard";
import axios from "axios";
import JK from "./YoutubeApi/jk";

function Recomendvideios() {
  const [arr, setArr] = useState({
    dataSetArray: [],
    dataArray1: [],
    dataArray2: [],
    dataArray3: [],
    dataArray4: [],
    dataArray5: [],
    dataArray6: [],
    dataArray7: [],
    dataArray8: [],
    dataArray9: [],
    dataArray10: [],
    dataArray11: [],
    dataArray12: [],
    dataArray13: [],
    dataArray14: [],
    dataArray15: [],
    dataArray16: [],
    dataArray17: [],
    dataArray18: [],
    dataArray19: [],
    dataArray20: [],
  });
  const fun = async () => {
    try {
      var url = "https://www.googleapis.com/youtube/v3/search?part=";
      var p = "snippet";
      // var o = "date";
      var KEY = "AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8";
      var q = "search"; //"user search string value"
      var r = 100;
      var apiurl = url + p + "&maxResults=" + r + "&key=" + KEY + "&q=" + q;
      /**
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          type: "video",
          order: "date",
          maxResults: 100,
          keys: KEY,
          q: "searchTerm",
        },
      })


//All vidios list
https://www.googleapis.com/youtube/v3/videos?maxResults=1000&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8&part=snippet,contentDetails,statistics&chart=mostPopular
https://www.googleapis.com/youtube/v3/videos?maxResults=1000&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8&part=snippet,contentDetails,statistics&chart=chartUnspecified
https://www.googleapis.com/youtube/v3/videos?maxResults=100&regionCode=AE&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8&part=snippet,contentDetails,statistics&chart=mostPopular


//search Query details Channels to get the "uploads" Id = "chanel" id.
https://www.googleapis.com/youtube/v3/channels?id={channel Id}&key={API key}&part=contentDetails
https://www.googleapis.com/youtube/v3/channels?id=UCN71zDAn2H-re6v5A7Joy8g&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8&part=contentDetails
https://www.googleapis.com/youtube/v3/search?maxResults=100&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8&part=snippet&q=tarvel%20sinhala  


//get playlist in vidios
https://www.googleapis.com/youtube/v3/playlistItems?playlistId={"uploads" Id}&key={API key}&part=snippet&maxResults=50
https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UUN71zDAn2H-re6v5A7Joy8g&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8&part=snippet&maxResults=50


//get vidio data likes commets counts
https://www.googleapis.com/youtube/v3/videos?part=statistics&id={vidio id}={YOUR_API_KEY}
https://www.googleapis.com/youtube/v3/videos?part=statistics&id=sTPtBvcYkO8&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8


//get chanel data all all counts views subcriptions 
https://www.googleapis.com/youtube/v3/channels?part=statistics&id='.$chann_id.'&key='.$api_key
https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCU_ZZ53ss0u9HvKF1jOsUjQ&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8

*/
      let ss = Math.round(Math.random() * 10000);
      // console.log(ss);

      apiurl =
        "https://www.googleapis.com/youtube/v3/videos?regionCode=LK&maxResults=100&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8&part=snippet,contentDetails,statistics&chart=mostPopular";
      //apiurl = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&maxResults=100&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8&q=opencourseware";
      await axios
        .get(apiurl)
        .then((response) => {
          var a = Object.values(response.data.items);
          setArr(a);
          console.log(response.data, a);

          /*
        //search ele out put ek
         console.log(response.data, a);
        console.log(response.data.items[0].id.videoId);
        console.log(response.data.items[0].snippet.channelTitle);
        console.log(response.data.items[0].snippet.title);
        console.log(response.data.items[0].snippet.description);
        console.log(response.data.items[0].snippet.thumbnails.default.url);

        console.log(response.data.items[0].id.videoId);
        console.log(response.data.items[0].snippet.channelId);
        console.log(response.data.items[0].snippet.channelTitle);
        console.log(response.data.items[0].snippet.title);
        console.log(response.data.items[0].snippet.description);
        console.log(response.data.items[0].snippet.thumbnails.default.url);
        */
        })
        .catch((error) => {
          throw error;
        });
    } catch (e) {
      console.log(e);
    }
  };

  var allDataArrayContent = [];

  const clk = async () => {
    try {
      var test = new Array(1000);
      var x = new JK();
      var p = x.dataSet; //variable
      /*
    console.log("dataSet length-", p.length);
    console.log("dataSet one intes item length-", p[0].items.length);
    console.log("All data set-", p.length * p[0].items.length);
    console.log("-one item-", p[0].items);
*/
      var d = [];
      var i = 0;
      var v = 0;

      await p.map((j) => {
        var g = j.items; //20 items
        //  console.log(i, "-g-", g);
        d[i] = g; //pup to arary indexes one by one it have 50 items
        // console.log(i, "-d-I", d[i]);

        //second loop
        var w = 0;
        d[i].map((z) => {
          /* console.log(w, "-z-gooooooog-", z);
        console.log(i + w);
        console.log(v);
        */
          test[v] = z;

          /*
        console.log(w, "-gooooooog-", z.snippet);
        console.log(w, "content Details-gooooooog-", z.contentDetails);
        */
          allDataArrayContent[w] = z;

          w++;
          v++;
        });

        v++;
        i++;
      });

      setArr({
        ...arr,
        dataArray3: test,
      });
    } catch (e) {
      console.log("recomended.js ", e);
    }
  };

  /*
    console.log("-dAll-", d);
    console.log("-d-[0]-", d[0]); //array list
    console.log("-d-[0][0]-", d[0][0]); //array list index have array

    console.log("-d-[0][0].snipet-", d[0][0].snippet); //array obeject name reference
    console.log("-d-[0]-", d[0][0].snippet.channelTitle);
    console.log(test.length, "-test-", test);

   */

  /*
    var x = p[0].items;
    var b = p[1].items;
    var c = p[2].items;
    var d = x.concat(b, c);
    */

  /*
    console.log("-1-", x.dataSet[0].items);
    var abcArray = [];
    p.map((d) => {
      console.log(i, "d--", d);
      console.log(i, "d--item", d.items);
      abcArray[i] = d.items;

      //  setArr({ ...arr, dataArray: abcArray });

      //  console.log(i, "arr-", arr);
      console.log(i, "-arr.dataArray-", arr.dataArray);
*/
  //  console.log(i, "--", arr[0].snippet);
  /* d.items.map((d) => {
        console.log(d.snippet);
      });
      */
  // console.log(pp);

  // });

  /*
    try {
      var apiurl =
        "https://www.googleapis.com/youtube/v3/videos?regionCode=LK&maxResults=1000&key=AIzaSyDQSURwrKUwOPdaHm0frk9o-mNlqqgKzFA&part=snippet,contentDetails,statistics&chart=mostPopular";
      //apiurl = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&maxResults=100&key=AIzaSyCYYbzNF_8fU5XON90QNgRkjtfYFN5v4m8&q=opencourseware";
      apiurl = "./YoutubeApi/a.json";
      await axios
        .get(apiurl, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((response) => {
          var a = Object.values(response.data.items);
          setArr(a);
          console.log(response);
        })
        .catch((error) => {
          throw error;
        });
    } catch (e) {
      console.log(e);
    }
*/
  /*

    var x = new sheet();
    console.log("hai", x.dataSetAE.items);
    setArr(Object.values(x.dataSetAE.items));
    console.log("--hh--", x.dataSetAE.items);
    //console.log("--all--", x.dataSetAll[0]);
    
    */

  //componentDidMount(){ alert("hai"); };
  /*
  
  
  */
  //setArr([1, 2, 3]);
  const loadData = async () => {
    var x = new JK();
    var p = x.dataSet; //variabl
    setArr({
      ...arr,
      dataArray3: p[1].items,
    });
    console.log(p[1].items[5]);
    console.log(p[1].items[5].snippet.thumbnails.default.url);
  };

  useEffect(() => {
    clk();
  }, []);

  var a = arr.dataArray3;
  const list = a.map((d) => {
    //  console.log("llllllllllllllll", d.snippet.channelTitle);
    //  var c = d.snippet.channelTitle;
    //  vidio={"https://www.youtube.com/watch?v=" + v}
    var v = d.id; //d.id.videoId;
    return (
      <div
        className="col-sm-12 col-md-3 col-lg-3"
        style={{ width: "100%", position: "relative", padding: "10px" }}
      >
        <VideoCard

          id={d.id}
          vidio={"https://www.youtube.com/watch?v=" + v}
          chanelname={d.snippet.title}
          discription={d.snippet.description}
          chanelimage={d.snippet.thumbnails.high.url}
          like={d.statistics.likeCount}
          view={d.statistics.viewCount}
          dislike={d.statistics.dislikeCount}
          commentCount={d.statistics.commentCount}
          favoriteCount={d.statistics.favoriteCount}
        />
      </div>
    );
  });

  return (
    <div>
      <div className="row" style={{ width: "100%", textAlign: "center" }}>
        {list}
      </div>
    </div>
  );
}

export default Recomendvideios;
