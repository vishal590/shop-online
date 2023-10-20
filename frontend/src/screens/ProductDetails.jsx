import React from 'react'
import { products } from '../products'
import {Row, Col, ListGroup, Button} from 'react-bootstrap'


const ProductDetails = ({match}) => {
    const product = products.find(p => p._id === match.params.id);

  return (
    <div>
        
    </div>
  )
}

export default ProductDetails