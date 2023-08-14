import React from "react";
import "./Datas.css";
import { Link } from "react-router-dom";
import { blogsData } from "./blogs-data";

function Datas() {
  return (
    <>
      <div className="context-container">
        <h2>All articles</h2>
        <div className="card-container">
          {blogsData.map((item) => {
            return (
              <div className="grid-item">
                <Link to={`/item/${item.id}`} key={item.id}>
                  <img src={item.image} alt={`Article ${item.id}`} />
                  <p>{item.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Datas;
