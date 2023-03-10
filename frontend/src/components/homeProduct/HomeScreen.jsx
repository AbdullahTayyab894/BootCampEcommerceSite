import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions';
import { Row, Col } from 'react-bootstrap'
import Product from './Product';
import Loader from '../loader/Loader';
import Message from '../message/Message';
const HomeScreen = () => {

    const dispatch = useDispatch()

    const productList = useSelector((state => state.productList))

    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
         
        <>
            <h1> Latest Products</h1>
            {
                loading ? (
                    <h2><Loader /></h2>
                ) : error ? (
                    <h2><Message variant="danger"/>{error}</h2>
                ) : (
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                )
            }
        </>
    )
}
export default HomeScreen;