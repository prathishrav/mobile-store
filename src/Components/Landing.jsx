import React, { useState } from 'react';
import "../App.css";
import AllBrands from './sections/AllBrands';
import NewMobile from './sections/NewMobile';
import Brand from './sections/Brand';
import Spec from './sections/Spec';
import Adds from './sections/Adds';
import Recommend from './sections/Recommend';
import Contact from './sections/Contact';


function Landing(props) {
    const [mobiles, setMobiles] = useState([
        { name: 'Nothing 1 (8GB,128GB,Black)', price: 30000, image: 'mobiles/n1.webp', clicked: false, arr: ['mobiles/n1.webp', 'mobiles/n1.webp', 'mobiles/n1.webp', 'mobiles/n1.webp',] },
        { name: 'Nothing 2 (8GB,128GB,Black)', price: 130000, image: 'mobiles/n2.webp', clicked: false, arr: ['mobiles/n2.webp', 'mobiles/n2.webp', 'mobiles/n2.webp', 'mobiles/n2.webp',] },
        { name: 'Nothing 3 (8GB,128GB,Black)', price: 3110000, image: 'mobiles/n3.webp', clicked: false, arr: ['mobiles/n3.webp', 'mobiles/n3.webp', 'mobiles/n3.webp', 'mobiles/n3.webp',] },
        { name: 'Nothing 4 (8GB,128GB,Black)', price: 32330000, image: 'mobiles/n4.webp', clicked: false, arr: ['mobiles/n4.webp', 'mobiles/n4.webp', 'mobiles/n4.webp', 'mobiles/n4.webp',] },
    ]);
    

    const addToCart = (item, index) => {
        const updatedMobiles = [...mobiles];
        updatedMobiles[index].clicked = !updatedMobiles[index].clicked;
        setMobiles(updatedMobiles);

        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...existingCart, { ...item, arr: item.arr }];
        localStorage.setItem('cart', JSON.stringify(updatedCart));

    };

    return (
        <div>
            <AllBrands />
            <NewMobile />
            <Brand />
            <Spec />
            <Recommend addToCart={addToCart} mobiles={mobiles} />
            <Adds addToCart={addToCart} />
            <Contact />
        </div>
    );
}

export default Landing;
