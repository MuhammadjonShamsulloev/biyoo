import React, { useState } from 'react'
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu } from 'antd';
import { FilterOutlined, DollarOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const { Sider } = Layout;



const Filters = () => {
  return (
    <div>
      <Sider width={200}   className="site-layout-background ">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<FilterOutlined />} style={{fontSize:20}} title="Filters">
            <Menu.Item key="1">All</Menu.Item>
            <Menu.Item key="2">Sell</Menu.Item>
            <Menu.Item key="3">Best Sellers</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<DollarOutlined />} style={{fontSize:20}} title="Price">
            <Menu.Item key="5">filter by price</Menu.Item>
          </SubMenu>
        </Menu>
    </Sider>
         
    </div>
  )
}

export default Filters
