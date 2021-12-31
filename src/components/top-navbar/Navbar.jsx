import "./Navbar.css"
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'antd/dist/antd.css';
import { Input, Space, Layout, Menu } from 'antd';
import { UserOutlined, HeartOutlined, SearchOutlined,
         ShoppingCartOutlined,LaptopOutlined, NotificationOutlined
       } from '@ant-design/icons';
import Cards from "../Cards";
import Laptops from "../Laptops";
import { Link, Routes, Route } from "react-router-dom";
import Mobile from "../Mobile";
import Welcome from "../Welcome";
import Tablet from "../Tablet";
import MenuList from "../MenuList";
import Footers from "../Footers";
import InfoDetails from "../InfoDetails";


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Search } = Input;


const Navbar = () => {
  return (
    <>
      <div>
        <Container fluid>
          <Row className="top-heading d-flex align-items-center ">
            <Col style={{cursor:'pointer'}} md={2} className=" align-items-center">
              <span className="main-logo ">Biyoo</span>
            </Col>
            <Col md={3} className=" p-0 align-items-center">
            <Space className="d-flex align-items-center justify-content-end  ">
              <Search 
                placeholder="Searching..."
                allowClear
                enterButton={<SearchOutlined className="d-flex align-items-center justify-content-center" style={{fontSize:20}} />}
                size="large"                  
              />
            </Space>

            </Col >
            <Col md={4} className=" align-items-center"></Col>
            <Col style={{cursor:'pointer'}} md={1} className=" d-flex justify-content-start align-items-center p-0"> 
              <UserOutlined style={{fontSize:24, marginRight:4}}  />
              Log In 
            </Col>
            <Col style={{cursor:'pointer'}} md={1} className=" d-flex justify-content-end align-items-center p-0"> 
              <HeartOutlined style={{fontSize:24, marginRight:4}} /> 
              <span>
                Favorites
              </span>
            </Col>
            <Col style={{cursor:'pointer'}} md={1} className=" d-flex align-items-center justify-content-center"> 
              <ShoppingCartOutlined style={{fontSize:24, marginRight:4}} /> 
              <span className="basket-text d-flex justify-content-center align-items-center "> {0} </span> 
            </Col>
          </Row>
        </Container>
        
        {/* Main Layout and the products */}

        <Layout>
          <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Link to='/cards'>
                <Menu.Item key="1">Shop All</Menu.Item>
              </Link>
              <Link to='/laptops'>
                  <Menu.Item key="2">Computers</Menu.Item>
              </Link>
              <Link to='/tablet'>
                <Menu.Item key="3">Tablets</Menu.Item>
              </Link>
              <Link to='/mobile'>
                <Menu.Item key="4">Mobile</Menu.Item>
              </Link>
              <Link to='/menulist'>
                <Menu.Item  key="5">Drones & Camera</Menu.Item>
              </Link>
              <Menu.Item key="6">T.V & Home Cinema</Menu.Item>
              <Menu.Item key="7">Wearable Tech</Menu.Item>
              <Link to='/infodetails'>
                <Menu.Item key="8">Sale</Menu.Item>
              </Link>
            </Menu>
          </Header> 
          
          <Layout>
          {/* <Filters /> */}
            <Routes>
              <Route exact path='/menulist' element={<MenuList />} />
              {/* <Route exact path='/filters' element={<Filters />} />   */}
            </Routes> 
  
            
          <Content
            className="site-layout-background d-flex justify-content-center"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 580,
            }}
          >

          <Routes >
            <Route exact path='/' element={<Welcome />}  / >
            <Route exact path='/cards' element={<Cards /> } />  
            <Route exact path='/laptops' element={<Laptops /> } />
            <Route exact path='/tablet' element={<Tablet /> } />
            <Route exact path='/mobile' element={<Mobile /> } /> 
            <Route exact path='/infodetails' element={<InfoDetails />} />      
          </Routes>
          </Content>
          </Layout>
        </Layout>
        <Footers />       
      </div>
    </>
  )
}

export default Navbar
