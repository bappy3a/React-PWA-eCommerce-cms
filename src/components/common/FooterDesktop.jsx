import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
          <Container>
            <Row className='px-0 my-5'>
              <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>Office Address</h5>
                <p>Sonatola Bogra, Dhaka bangladesh <br /> Email: bappy3a@gmail.com</p>
                <h5 className='footer-menu-title'>Social Link</h5>
                <a href="#"><i className="fab m-1 h4 fa-facebook"></i></a>
                <a href="#"><i className="fab m-1 h4 fa-instagram"></i></a>
                <a href="#"><i className="fab m-1 h4 fa-youtube"></i></a>
              </Col>
              <Col className='p-2'  lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>The Company</h5>
                <Link to="/" className='footer-link'>About Us</Link> <br />
                <Link to="/" className='footer-link'>Company Profie</Link> <br />
                <Link to="/contact" className='footer-link'>Contact Us</Link>
              </Col>
              <Col className='p-2'  lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>More Info</h5>
                <Link to="/" className='footer-link'>How To Purchase</Link> <br />
                <Link to="/" className='footer-link'>Privacy Policy</Link> <br />
                <Link to="/" className='footer-link'>Refund Policy</Link> <br />
              </Col>
              <Col className='p-2'  lg={3} md={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>Download App </h5>
                <a href="#"><img src={Google} className='' /></a>
                <a href="#"><img src={Apple} className='mt-2' /></a>
              </Col>
            </Row>
          </Container>
          <Container fluid className='text-center m-0 pt-3 mb-1 bg-dark'>
            <Row>
              <h6 className='text-light'>Copyright 2022 Hishabee Business Manager</h6>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default FooterDesktop