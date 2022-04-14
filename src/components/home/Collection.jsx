import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

class Collection extends Component {
  render() {
    return (
        <Fragment>
            <Container className='text-center ' fluid={true}>
                <div className='section-title text-center mb-55'>
                    <h2>Callection Products</h2>
                    <p>Sume Of Our Exclusive Collection, You may Like</p>
                </div>
                <Row>

                    <Col className='p-1' key={1} xl={3} lg={3} sm={6} xs={6} >
                        <Card className='image-box card'>
                            <img className='center' src="https://rukminim2.flixcart.com/image/540/648/l0mr7gw0/kurta/1/z/c/xl-jk4962-jaipur-kurti-original-imagcdga6k7jwnzf.jpeg?q=50" alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>Women Kurta and Pant Set Cotton Blend</p>
                                <p className='product-price-on-card'>Price $300</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='p-1' key={1} xl={3} lg={3} sm={6} xs={6} >
                        <Card className='image-box card'>
                            <img className='center' src="https://rukminim2.flixcart.com/image/540/648/knan98w0/kurta/7/u/d/xl-vfku900-vbuyz-original-imag2yf9tfqdm5dh.jpeg?q=50" alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>Women Kurta and Pant Set Cotton Blend</p>
                                <p className='product-price-on-card'>Price $300</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='p-1' key={1} xl={3} lg={3} sm={6} xs={6} >
                        <Card className='image-box card'>
                            <img className='center' src="https://rukminim2.flixcart.com/image/540/648/k12go7k0/kurta/e/t/h/xl-n4448gn-saarah-original-imaffxupmnzjddaq.jpeg?q=50" alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>Women Kurta and Pant Set Cotton Blend</p>
                                <p className='product-price-on-card'>Price $300</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='p-1' key={1} xl={3} lg={3} sm={6} xs={6} >
                        <Card className='image-box card'>
                            <img className='center' src="https://rukminim2.flixcart.com/image/540/648/ky90scw0/ethnic-set/v/w/g/m-n4733gp-saarah-original-imagaj3ujwy8fzjx.jpeg?q=50" alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>Women Kurta and Pant Set Cotton Blend</p>
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

export default Collection