import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureCard from "./PictureCard";

const PictureList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=gJRPQFohwK5cATo9zPhnya2lzFEkutJVZPVZDBDM"
      )
      .then((response) => {
        const nasa = response.data;
        setData(nasa);
        console.log(response.data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="entry">
      {data && (
        <PictureCard
          date={data.date}
          title={data.title}
          url={data.url}
          explanation={data.explanation}
        />
      )}
    </div>
  );
};

export default PictureList;
