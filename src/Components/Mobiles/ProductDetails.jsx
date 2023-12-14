import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useLocation } from 'react-router-dom';
import "./PDetail.css"

function ProductDetails() {
  const [index, setIndex] = useState(0)
  const location = useLocation();
  const productsArray = location.state?.productsArray || [];

  const mobiledetail = productsArray?.map((product, index)=>{
    return(
      <div key={index}>
        <img src={product} alt={`Product ${index + 1}`} />
      </div>
    )
  }) 
console.log(mobiledetail);


  return (
    <div>
      <h2> Product Details</h2>
      <div className='card-wrapper'> 
      <div className="product-imgs">
                    <div className="img-display">
                        <div className="img-showcase">
                            {mobiledetail && <img src={productsArray[index]} alt="bike" />}

                        </div>
                    </div>
                    <div className="img-select">
                        <div className="img-item">
                            <div className='thumbnail' onClick={() => { setIndex(0) }} data-id="1">
                                {mobiledetail && <img src={productsArray[0]} alt="bike" />}
                            </div>
                        </div>
                        <div className="img-item">
                            <div className='thumbnail' onClick={() => { setIndex(1) }} data-id="2">
                                {mobiledetail && <img src={productsArray[1]} alt="bike" />}
                            </div>
                        </div>
                        <div className="img-item">
                            <div className='thumbnail' onClick={() => { setIndex(2) }} data-id="3">
                                {mobiledetail && <img src={productsArray[2]} alt="bike" />}
                            </div>
                        </div>
                        <div className="img-item">
                            <div className='thumbnail' onClick={() => { setIndex(3) }} data-id="4">
                                {mobiledetail && <img src={productsArray[3]} alt="bike" />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mdetail">

<div className="product-detail">

<ul>
    <li>cc: <span>id</span></li>
    <li>Mileage: <span>mileage</span></li>
    <li>Color: <span>color</span></li>
    <li>Ownership: <span>ownership</span></li>
    <li>Kilometer Driven: <span> km</span></li>
    <li>bikeno: <span> bikeN</span></li>
    <li>Year: <span>year</span></li>
    <li>Address: <span>address</span></li>
</ul>
</div>
<div> 
<button className='BN1'>BUY NOW</button> <br />
<button className='BN2'> ADD TO CART</button>
</div>
               
                <div className="social-links">
                        <p>Share At: </p>

                        <a href="https://instagram.com/prathish_rav?igshid=ZDdkNTZiNTM=">
                            <i><FontAwesomeIcon icon={faInstagram} /></i>
                        </a>
                        <a href=" https://wa.me/qr/EX2DHNDKBSWYE1
 ">
                            <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                        </a>

                    </div>
                    </div>
                    </div>
    </div>
  );
}

export default ProductDetails;
// .BN1{
//     padding: 14px 132px;
//     margin: 30px 12px 15px 12px;
//     background: #61cad7;
//     border-radius: 15px;
//     border: none;

// }
// .BN2{
//     padding: 14px 121px;
//     margin: 0px 12px;
//     background: darkcyan;
//     border-radius: 15px;
//     border: none;
// }
// @media (max-width:355px){
//     .img-showcase {
//         border-left: 2px solid white;
//         border-right: 6px solid white;
//         border-top: 3px solid white;
//         display: flex;
//         width: 98%;
//         transition: all 0.5s ease;
//     }
//     .img-item {
//         border-left: 2px solid white;
//         border-right: 6px solid white;
//         border-top: 6px solid white;
//         border-bottom: 6px solid white;
//         height: 100%;
//         margin: 0 auto;
//         width: 100%;
//     }
// }