import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./List.css";

function List() {
  const [data, setData] = useState([]);
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    axios.get("http://www.mocky.io/v2/5ba8efb23100007200c2750c").then((res) => {
      setData(res.data);
    });
  }, []);

  function handleChange(value) {
    setSearchText(value);
    let temp = data.filter((obj) =>
      Object.values(obj).some((val) => val.includes(value))
    );
    setResData(temp);
  }
  return (
    <div className="container">
      <input
        type="text"
        value={searchText}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="listContainer">
        {searchText.length > 0 &&
          resData.length > 0 &&
          resData.map((item) => {
            return <Card key={item.id} dataObj={item} />;
          })}
      </div>
      {searchText.length > 0 && resData.length == 0 && <p>No result found</p>}
    </div>
  );
}

export default List;
