import React from "react";
import "./ItemDetails.css";

import { useParams } from "react-router-dom";
import { blogsData } from "../data/blogs-data";

function ItemDetails() {
  const { itemId } = useParams();

  const filteredItem = blogsData.filter((i) => i.id == itemId);
  console.log(filteredItem);
  if (!filteredItem?.length) {
    return <div>Item not found</div>;
  }
  return (
    <div>
    
      <div className="item-product">
        <img src={filteredItem[0].image} />
        <h2>{filteredItem[0].title}</h2>
      </div>
    </div>
  );
}

export default ItemDetails;
