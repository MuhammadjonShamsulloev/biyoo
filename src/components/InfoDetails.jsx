import React from 'react'
import ReactDOM from 'react-dom';
import laptop_image from './products/laptop-1.jpeg'
import 'antd/dist/antd.css';
import { Button, Image } from 'antd';

const InfoDetails = () => {
  return (
    <div className=''>
      <h2>
        Welcome to info page
      </h2>
      <div className='infoPageDiv  d-flex justify-content-around' style={{marginTop:70}} >
        <div className='each-product-img-div  '>
        <Image
          width={400}
          src={laptop_image}
        />
        </div>
        <div className='each-product-img-div  '>
          <h3>Macbook m1 air</h3>
          <h5>Price</h5> <span >$ 1000</span>
          <br />
            <h5>Description</h5>
          <div className='d-flex justify-content-center' >
            <div style={{maxWidth:200}}>
              Apple M1 chip with 8‑core CPU, 7‑core GPU and 16‑core Neural Engine
              8GB unified memory
              256GB SSD storage¹
              Retina display with True Tone
              Magic Keyboard
              Touch ID
              Force Touch trackpad
              Two Thunderbolt / USB 4 ports
            </div>
          </div>
          <Button type='primary' style={{width:150, height:40, marginTop:10}}><strong>Buy</strong></Button>
          <br/>
        </div>
      </div>
    </div>
  )
}

export default InfoDetails
