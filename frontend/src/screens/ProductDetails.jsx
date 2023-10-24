import React, {useState, useEffect} from "react";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
} from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import Rating from "../components/Rating";
import axios from 'axios';


const ProductDetails = () => {
  const params = useParams();
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async() => {
      const {data} = await axios.get(`/products/${params.id}`)
      setProduct(data);
    }
    fetchProduct();
  },[])

  return (
    <div>
      <Link to='/' className="btn btn-light">
        <i className="fas fa-arrow-left"></i>
        &nbsp;Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={Product.image} alt={Product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{Product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
                <Rating value={Product.rating} text={`${Product.numReviews} Reviews`} />
            </ListGroupItem>
            <ListGroupItem>
                Price: $ {Product.price}
            </ListGroupItem>
            <ListGroupItem>
                {Product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
            <ListGroupItem>
                <Row>
                    <Col>Status:</Col>
                    <Col>{Product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button className="btn-block" type="button">Add to Cart</Button>
            </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
