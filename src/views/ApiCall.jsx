import React from "react";
import {Link, Paper} from "@material-ui/core";
import axios from "axios";

const Example = () => {
  // this is a react hook and is the new way to use state within a component as of React 16
  const [data, setData] = React.useState([]);

// example of an api call using axios this was npm installed 
// taken from https://www.programmableweb.com/category/humor/api
  React.useEffect(() => {
    const fetchFriendsData = async () => {
      try {
        const quotes = await axios.get("https://friends-quotes-api.herokuapp.com/quotes");
        setData(quotes.data);
      } catch (error) {
        console.log("error", error);
      }
    }; 
    fetchFriendsData();
  }, [data]);

  return (
    <Paper>
      <div> Api Call Example</div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div> {item.quote}</div> <div>{item.character} </div>
          </div>
        );
      })}
      <Link>  </Link>
    </Paper>
  );
};

export default Example;
