import React from 'react';

function contact(props) {
    return (
        <div className='c'>
<div className='contact-1'>
    <h2 className='head'>CONTACT US</h2>

    <div > 
       <div className='ne'> 
            <div className='mdiv'><input type="text" placeholder='Name' /></div>
            <div className='mdiv' ><input type="text" placeholder='Email Address'/></div>
            </div>
        <div className='msg1'> <input type="text" placeholder='Enter your messege' name="" id="msg" /> </div>
        <div><button className='btn3'>Send it Now</button></div>
    </div>
</div>
            
        </div>
    );
}

export default contact;