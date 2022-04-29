import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppUrl from '../../api/AppUrl';
import Login from '../../assets/images/login.png'
class UserLogin extends Component {

    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            loggedIn:false
        }
    }

    formSummit= (e) =>{
        e.preventDefault();

        axios.post(AppUrl.UserLogin,this.state)
        .then((response) => {
            localStorage.setItem('token',response.data.token);
            this.setState({
                loggedIn:true
            })
            this.props.setUser(response.data.user);
        })
        .catch((error) => {
            this.setState({ message: error.response.data.message })
        });
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className="onboardForm" onSubmit={this.formSummit}>
                                        <h4 className="section-title-login"> USER SING IN </h4>

                                        <input className="form-control m-2" type="email" placeholder="Enter Your Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />

                                        <input className="form-control m-2" type="password" placeholder="Enter Your Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />


                                        <Button type="submit" className="btn btn-block m-2 site-btn-login"> Login </Button>

                                        <br></br> <br></br>
                                        <hr />
                                        <p> <b> Forget My Password? </b><Link to="/forget"><b> Froget Password </b> </Link> </p>

                                        <p> <b> Don't Have An Account ? </b><Link to="/register"><b> Register </b> </Link> </p>

                                    </Form>


                                </Col>

                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src={Login} />
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default UserLogin