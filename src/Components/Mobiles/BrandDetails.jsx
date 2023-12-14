import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../data';

function BrandDetails() {
  const { brandId } = useParams();
  const numericBrandId = parseInt(brandId, 10); 
  const brand = data.find((brand) => brand.id === numericBrandId);
  const navigate = useNavigate();

  if (!brand) {
    return <div>Brand not found</div>;
  }
  const handleCheckout = (productId) => {
    const selectedDetailImage = brand.detailimages.find((image) => image.id === productId.toString());
  
    if (selectedDetailImage) {
      const productsArray = selectedDetailImage.products;
      navigate(`/product/${productId}`, { state: { productsArray } });
    } else {
      console.log('Detail image not found');
      console.log('Parsed Product ID:', productId);
      console.log('Detail Images:', brand.detailimages);
    }
  };
  
  
  
  return (
    <div>
      <h2 className='hea'>{brand.name} Details</h2>
      <div className='iph'>
        {brand.detailimages.map((image, index) => (
          <div  className='maincard' key={index}>
            <div className='card'> <img src={image.image} alt={` $ {index + 1}`} />
            
            
            <button className='ipbtn' onClick={() => handleCheckout(image.id)}>
              Checkout
            </button> </div> 
            <div className='dee'> <p className='iphp'>{image.details}</p>
            <span className='amm'> ₹  {image.amount}</span>
             </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandDetails;