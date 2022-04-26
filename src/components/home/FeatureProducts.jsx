import axios from 'axios';
import React, { Component, Fragment } from 'react'
import {Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppUrl from '../../api/AppUrl';

class FeatureProducts extends Component {

    constructor(){
        super();
        this.state = {
            products : [],
        }
    }

    componentDidMount(){
        this.getFeatureProducts();
    }

    getFeatureProducts(){
        axios.get(AppUrl.allFeature)
            .then((response) => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }

    render() {

        const products = this.state.products;

        const MyView = products.map((product,i)=>{

            return <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6} >
                    <Link className="text-link" to={"/productdetails/"+product.id} >
                        <Card className='image-box card'>
                            <img className='center' src={product.image} alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>{product.title}</p>
                                <p className='product-price-on-card'>Price ${product.price}</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>

        })

        return (
            <Fragment>
                <Container className='text-center ' fluid={true}>
                    <div className='section-title text-center mb-55'>
                        <h2>Feature Products</h2>
                        <p>Sume Of Our Exclusive Collection, You may Like</p>
                    </div>
                    <Row>


                        {MyView}

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default FeatureProducts