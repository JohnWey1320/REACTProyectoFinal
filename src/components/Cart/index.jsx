import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/Index";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import './cart.css';

const Cart =() => {

const { cart, totalPrice } = useCartContext();

const order ={

buyer: {

name: 'John',
email: 'johnromero1320@gmail.com',
phone: '1127715135',
address: 'CABA'
},

items: cart.map(product =>({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
total: totalPrice(),
}

const handleClick = () => {
const db = getFirestore();
const ordersCollection = collection(db, 'orders');
addDoc(ordersCollection, order)
.then (({id}) => console.log(id))

}

if (cart.length === 0) {
    return (
        <>
            <p>No Hay Elementos en el Carrito</p>
        <Link to='/'>Hacer Compras</Link>
        </>
    );
}
return(    
    <>
    {
    cart.map(product => <ItemCart key={product.id} product={product}/>)
}

<p>
total: {totalPrice()}
</p>

<button onClick={(handleClick)}>Emitir Compra</button>
    </>
    )

}
export default Cart