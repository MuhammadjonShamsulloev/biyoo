import React from 'react'
import products from './Data'
import { Card } from 'antd';
import Filters from './Filters';


const { Meta } = Card;


const Tablet = () => {

  const tablet = products.filter((product) =>
    product.type === 'tablet').map(({id, title, image, description}) => 
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
      <h2 className='d-flex justify-content-center'>
        Tablets
      </h2>
      <div className='d-flex'>
        <Filters />
        <div className='d-flex flex-wrap'>
          {tablet}
        </div>
      </div>
    </div>
  )
}

export default Tablet
