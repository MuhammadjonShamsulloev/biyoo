import React, { useState } from 'react'; 
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import products from './Data';
import Filters from './Filters';
import { Link } from "react-router-dom";

const { Meta } = Card;

const Cards = () => {


  const listOfProducts = products.map(({ id, title, image, description }) => 
  <Link to='/infodetails'>
    <Card 
    hoverable
    style={{ width: 240, height: 350, margin:5, textDecoration:'none' }}
    cover={<img style={{height:180}} alt={title} src={image} />}
    key={id}
  >
    <Meta title={title}  className="d-flex justify-content-center" />
    <Meta description={description} />
  </Card>,
  </Link>
  );

  return (
    <div >
      <h2 className=" d-flex justify-content-center">The components to show.</h2>
      <div className='d-flex'>
        <Filters />
        <div  className=" d-flex flex-wrap "> 
            { listOfProducts }
        </div>
      </div>
    </div>
  )
}

export default Cards
