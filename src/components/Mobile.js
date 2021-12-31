import React from 'react';
import products from './Data';
import { Card } from 'antd';
import Filters from './Filters';

const { Meta } = Card;



const Mobile = () => {

  const mobile = products.filter((product) =>
    product.type === 'phone').map(({id, title, image, description}) => 
    <Card
    hoverable
    style={{ width: 240, height: 300, margin:5 }}
    cover={<img style={{height:180}} alt={title} src={image} />}
  >
    <Meta title={title}  className="d-flex justify-content-center" />
    <Meta description={description} />
  </Card>
   
  )

  return (
    <div>
      <h2 className='justify-content-center d-flex'>Mobile Phones</h2>
      <div className='d-flex'>
        <Filters />
        <div className='d-flex flex-wrap'> 
          {mobile}
        </div>
      </div>
  </div>
  )
}

export default Mobile
