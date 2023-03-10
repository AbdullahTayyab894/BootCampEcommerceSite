import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import Rating from '../homeProduct/Rating'
import { useParams } from "react-router";
import axios from 'axios'

const Detail = () => {
  const [product, setProducts] = useState({})
  const { id } = useParams()

  useEffect(()=>{
      const fetchItem = async ()=>{
          const {data} = await axios.get(`http://localhost:5000/api/products/${id}`)
          setProducts(data)
      }
      fetchItem()
  })

  return (
    <>
      <Link to="/" className='btn btn-light my-3'>
        Go to Home
      </Link>
      <Row>
        <Col md="6">
          <Image src={product.image} alt={product.name} fluid style={{
            height: "500px"
          }} />
        </Col >
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>
                {product.name}
              </h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`} />
            </ListGroup.Item>

            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              Description: ${product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>${product.countInStock > 0 ? 'In A Stock' : 'Out of Stock'}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Detail

