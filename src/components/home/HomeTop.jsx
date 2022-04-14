import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import MegaMenu from './MegaMenu'

class HomeTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='p-0'>
                    <Row>
                        <Col lg={3} md={3} sm={12}>
                            <MegaMenu></MegaMenu>
                        </Col>

                        <Col lg={9} md={9} sm={12}>
                            <Slider></Slider>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default HomeTop