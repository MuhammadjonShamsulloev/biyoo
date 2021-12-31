import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

import './App.css'
import imgSlide_1 from './imgs/slide-img.png'
import imgSlide_2 from './imgs/slide-img-2.png'
import imgSlide_3 from './imgs/slide-img-3.png'
import imgSlide_4 from './imgs/slide-img-phone.png'
import imgSlide_5 from './imgs/slide-img-headphone.png'


const MenuList = () => {
  return (
    <>
      <div className='slider-div'>
        <Carousel autoplay>  
          <div>
            <h3>
              <img className='imgSlide' src={imgSlide_1} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img className='imgSlide' src={imgSlide_2} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img className='imgSlide' src={imgSlide_3} alt="" />
            </h3>
          </div>
        </Carousel>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='bottom-imges'>
          <img className='bottom-imges ' src={imgSlide_4} alt="" />
        </div>
        <div className='bottom-imges'>         
          <img className='bottom-imges' src={imgSlide_5} alt="" />
        </div>
      </div>  

    </>
  )
}

export default MenuList;
