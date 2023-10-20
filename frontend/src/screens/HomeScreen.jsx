import React from 'react'
import {products} from '../products'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import ProductScreen from './ProductScreen';


const HomeScreen = () => {
  return (
    <Row>
        {
          products.map(product => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />

            </Col>
          ))
        }
    </Row>
  )
}

export default HomeScreen