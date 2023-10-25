import Item from "../Item/item";
import React from "react";
import './itemlist.css'



const ItemList = ({ data = [] }) => {

    return (

      <div className="item-list" id="john"> { data.map(animes => <Item key={animes.id} info={animes} />) }</div>

    );

}

export default ItemList;