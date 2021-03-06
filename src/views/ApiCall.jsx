import React from "react";
import {Paper} from "@material-ui/core";
import axios from "axios";

const Example = () => {
  // this is a react hook and is the new way to use state within a component as of React 16
  const [data, setData] = React.useState([]);
  // const ref = React.useRef(true);

  // example of an api call using axios this was npm installed
  // taken from https://www.programmableweb.com/category/humor/api
  // React.useEffect(() => {
  //   () => (ref.current = false);
  // }, []);

  const fetchFriendsData = async () => {
    try {
      const quotes = await axios.get("https://friends-quotes-api.herokuapp.com/quotes");
      // if (ref.curent) {
      // console.log(quotes);
      setData(quotes.data);
      // }
    } catch (error) {
      console.log("error", error);
    }
  };

  React.useEffect(() => {
    fetchFriendsData();
  }, []);

  if (!data.length) {
    return <div> Loading .... </div>;
  }

  return (
    <Paper>
      <div> Api Call Example</div>
      <p> Taken from Friends, `https://www.programmableweb.com/category/humor/api` </p>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div> {item.quote}</div> <div>{item.character} </div>
          </div>
        );
      })}
    </Paper>
  );
};

export default Example;
