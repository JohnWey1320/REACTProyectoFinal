import './item.css';
import { Link } from 'react-router-dom';
import React, {useContext} from 'react';


const Item = ({ info }) => {


    return (
        <Link to={`/detalle/${info.id}`} className="animes" id={info.id}>

            <img src={info.image} alt="" />
            <p>{info.title}</p>

        </Link>
    );

}

export default Item;