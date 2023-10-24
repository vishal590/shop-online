import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import ProductScreen from './ProductScreen';
import axios from 'axios'


const HomeScreen = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/products')
      setProducts(data);
    }
    fetchProducts();
  },[])

  return (
    <Row>
        {
          Products.map(product => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />

            </Col>
          ))
        }
    </Row>
  )
}

export default HomeScreen