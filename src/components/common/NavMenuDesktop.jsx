import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className='TopSectionDown'>
          <Navbar bg="light" fixed={'top'} className="navbar">

            <Container fluid={'true'} className="fixed-top shadow-sm p-2 mb-0 bg-white">
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  <Link to='/'><img src={Logo} alt="" className='nav-logo mt-2' /></Link>
                </Col>

                <Col lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100 mt-2">
                    <input type="text" className="form-control" />
                    <Button type="button" className="btn site-btn"><i className="fa fa-search"> </i></Button>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={12} xs={12} className="mt-2">
                    <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">3</span></sup>
                    </Link>

                    <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">5</span></sup>
                    </Link>

                    <Link to="/login" className="h4 btn">LOGIN</Link>
                    <Link to="/register" className="h4 btn">REGISTER</Link>

                    <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 0 Items </Link>
                </Col>
              </Row>
            </Container>

          </Navbar>
        </div>

      </Fragment>
    )
  }
}

export default NavMenuDesktop