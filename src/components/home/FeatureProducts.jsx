import React, { Component, Fragment } from 'react'
import {Card, Col, Container, Row } from 'react-bootstrap'

class FeatureProducts extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center ' fluid={true}>
                    <div className='section-title text-center mb-55'>
                        <h2>Feature Products</h2>
                        <p>Sume Of Our Exclusive Collection, You may Like</p>
                    </div>
                    <Row>

                        <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6} >
                            <Card className='image-box card'>
                                <img className='center' src="https://rukminim2.flixcart.com/image/832/832/ke1pnrk0/mobile/j/q/r/gionee-max-gionee-max-original-imafutmrmdaz2dau.jpeg?q=70" alt="" />
                                <Card.Body>
                                    <p className='product-name-on-card'>Realme GT 2 Pro (Paper White, 128 GB)  (8 GB RAM)</p>
                                    <p className='product-price-on-card'>Price $300</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6} >
                            <Card className='image-box card'>
                                <img className='center' src="https://rukminim2.flixcart.com/image/832/832/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70" alt="" />
                                <Card.Body>
                                    <p className='product-name-on-card'>Realme GT 2 Pro (Paper White, 128 GB)  (8 GB RAM)</p>
                                    <p className='product-price-on-card'>Price $300</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6} >
                            <Card className='image-box card'>
                                <img className='center' src="https://rukminim2.flixcart.com/image/832/832/l1mh7rk0/mobile/v/x/k/-original-imagd5ghpgevkwzg.jpeg?q=70" alt="" />
                                <Card.Body>
                                    <p className='product-name-on-card'>Realme GT 2 Pro (Paper White, 128 GB)  (8 GB RAM)</p>
                                    <p className='product-price-on-card'>Price $300</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6} >
                            <Card className='image-box card'>
                                <img className='center' src="https://rukminim2.flixcart.com/image/832/832/kyeqjrk0/mobile/y/u/t/-original-imagan9qzdf2hbgy.jpeg?q=70" alt="" />
                                <Card.Body>
                                    <p className='product-name-on-card'>Realme GT 2 Pro (Paper White, 128 GB)  (8 GB RAM)</p>
                                    <p className='product-price-on-card'>Price $300</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6} >
                            <Card className='image-box card'>
                                <img className='center' src="https://rukminim2.flixcart.com/image/832/832/l1dwknk0/mobile/f/t/x/-original-imagcyj4unsxhadw.jpeg?q=70" alt="" />
                                <Card.Body>
                                    <p className='product-name-on-card'>Realme GT 2 Pro (Paper White, 128 GB)  (8 GB RAM)</p>
                                    <p className='product-price-on-card'>Price $300</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6} >
                            <Card className='image-box card'>
                                <img className='center' src="https://rukminim2.flixcart.com/image/832/832/l1l1rww0/mobile/m/e/g/-original-imagd4de95nsrbxy.jpeg?q=70" alt="" />
                                <Card.Body>
                                    <p className='product-name-on-card'>Realme GT 2 Pro (Paper White, 128 GB)  (8 GB RAM)</p>
                                    <p className='product-price-on-card'>Price $300</p>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default FeatureProducts