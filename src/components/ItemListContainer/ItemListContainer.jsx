import React, { useState, useEffect } from 'react';
import Title from '../Title/Title';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/itemlist';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'




export const ItemListContainer = (props) => {

  const [data, setData] = useState([]);

  const { listaid } = useParams();

  useEffect(() => {

    const querydb =getFirestore();
    const queryCollection = collection(querydb, 'products');
    
  if (listaid) {

    const queryFilter = query(queryCollection, where('category', '==', listaid))
    getDocs(queryFilter)
    .then(res => setData(res.docs.map(products => ({id: products.id, ...products.data()}))))
  } else {
    getDocs(queryCollection)
    .then(res => setData(res.docs.map(products => ({id: products.id, ...products.data()}))))
  }

  }, [listaid])

  

  return (
    <div className='item-list-container'>
      <Title greeting={props.texto} />

      <ItemList data={data} />
    </div>
  );
}

export default ItemListContainer
