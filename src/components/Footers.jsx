import React from 'react'


import Visa from './imgs/Visa.webp';
import Master_Card from './imgs/Mastercard.webp';
import American_Card from './imgs/Amex.webp';
import Union_pay from './imgs/Unionpay.webp';
import Jcb from './imgs/Jcb.webp';
import Diners_Card from './imgs/Diners-visa.webp';
import Discover_Card from './imgs/Discover-visa.webp';
import Paypal from './imgs/PayPal.webp';






const Footers = () => {
  return (
    <>
      <div style={{ textAlign: 'center', background:'#001529', color:'#fff', height: 120, cursor:'pointer', bottom:0, marginTop:80 }}>
      <h6 style={{color:'#fff',marginTop:15}}>
        We accept the following paying methods.
      </h6>

        <div className='d-flex justify-content-center align-items-center ' >
        <div className='footer-paying-divs'>
          <img className='footer-images' src={Visa} alt="Visa-Card" />
        </div>
        <div className='footer-paying-divs'>
          <img className='footer-images' src={Master_Card} alt="Master-Card" />
        </div>
          <div className='footer-paying-divs'>
          <img className='footer-images' src={American_Card} alt="Amerocan-Express" />
        </div>
        <div className='footer-paying-divs'>
          <img className='footer-images' src={Union_pay} alt="Unipay-China" />
        </div>
        <div className='footer-paying-divs'>
          <img className='footer-images' src={Jcb} alt="JCB" />
        </div>
        <div className='footer-paying-divs'>
          <img className='footer-images' src={Diners_Card} alt="Diner-Club-international" />
        </div>
        <div className='footer-paying-divs'>
          <img className='footer-images' src={Discover_Card} alt="Discover-Card" />
        </div>
        <div className='footer-paying-divs'>
          <img className='footer-images' src={Paypal} alt="Paypal-Card" />
        </div>  
      </div>
      </div>
    </>
  )
}

export default Footers
