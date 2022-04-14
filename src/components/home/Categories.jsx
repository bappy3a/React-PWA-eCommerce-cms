import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

class Categories extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <div className='section-title text-center mb-55'>
                        <h2>Categorys</h2>
                        <p>Sume Of Our Exclusive Collection, You may Like</p>
                    </div>
                    <Row>

                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/3c0ed3a475254040.png?q=100" alt="" />
                                    <h5 className='categoyr-name'>Mobile</h5>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/176346e6dd7d4c19.png?q=100" alt="" />
                                    <h5 className='categoyr-name'>Fashion</h5>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/033d10763bb282c8.png?q=100" alt="" />
                                    <h5 className='categoyr-name'>Electronics</h5>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/fe1ecdf8ac74c447.png?q=100" alt="" />
                                    <h5 className='categoyr-name'>Home</h5>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/5ea7d4e25b97415f.png?q=100" alt="" />
                                    <h5 className='categoyr-name'>Travel</h5>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/f7c65aa39d3625f5.png?q=100" alt="" />
                                    <h5 className='categoyr-name'>Beauty,Toys & more</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Categories