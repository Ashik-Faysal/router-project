import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";
import "./Friends.css";

const Friends = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <h1 style={{ color: "maroon" }}>Here is my all friends: {data.length}</h1>
      <div className="grid">
        {data.map((singleData) => (
          <Friend key={singleData.id} singleData={singleData} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
