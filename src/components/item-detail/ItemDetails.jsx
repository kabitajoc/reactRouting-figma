import React from "react";
import Datas from "../data/Datas";
import Nav from "../nav/Nav";
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
      <Nav />
      {/* <Datas /> */}
      {/* <img src={item.image} alt={`Article ${item.id}`} />
                  <p>{item.title}</p> */}
      <h1>Detail is given here</h1>
      <div className="item-product">
        <h2>{filteredItem[0].title}</h2>
        <img src={filteredItem[0].image} />
      </div>
    </div>
  );
}

export default ItemDetails;
