import React, { useState, useEffect } from 'react';
import "../../App.css";
import { useNavigate } from 'react-router-dom';
function Mycart(props) {
    const [cart, setCart] = useState([]);
const navigate = useNavigate();
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    function deleteItem(index) {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    const handleBuyNow = (productId) => {
     
        navigate(`/product/${productId}`);
    };

    const productDetails = cart?.map((item, index) => (
        <div className='hello' key={index}>
            <div className='nam'>
                <img src={item.image} alt={item.name} />
            </div>
            <div className='nam'>
                <span>{item.name}</span> <br />
                <span>₹ {item.price}</span> <br />
                <button className='bn' onClick={()=>handleBuyNow(index)}>Buy Now</button> <br />
                <button className='dlt' onClick={() => deleteItem(index)}>Delete</button>
    
            
            </div>
        </div>
    ));
    
    

    return (
        <div>
            <div className='prod'>
                {productDetails}
            </div>
        </div>
    );
}

export default Mycart;
