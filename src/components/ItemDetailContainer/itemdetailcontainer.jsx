import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from "../ItemDetail/itemdetail";
import { useParams } from "react-router-dom";
import './itemdetailcontainer.css'



export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const { detalleid } = useParams();

    useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', detalleid);
    getDoc(queryDoc)
    .then(res => setData({ id: res.id, ...res.data() }))

    }, [detalleid])

    return (

       <div className="item-detail-container"> <ItemDetail data={data} /> </div>

    );

}

export default ItemDetailContainer