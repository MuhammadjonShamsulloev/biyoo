import React from 'react';
import products from './Data';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Link } from 'react-router-dom'
import Filters from './Filters';
  


const { Meta } = Card;


const Laptops = () => {

  const laptops = products.filter(product => 
      product.type === 'laptop').map(({id, title, image, description}) => 
        <Card
        hoverable
        style={{ width: 240, height: 300, margin:5 }}
        cover={<img style={{height:180}} alt={title} src={image} />}
      >
        <Meta title={title}  className="d-flex justify-content-center" />
        <Meta description={description} />
      </Card> 
      );
      
  return (
    <div>
      <h2 className='justify-content-center d-flex'>Laptops</h2>
      <div className='d-flex'>
        <Filters />
        <div className='d-flex flex-wrap'> 
          {laptops}
        </div>
      </div>
    </div>
  );
}

export default Laptops
