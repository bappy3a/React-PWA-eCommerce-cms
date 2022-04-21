import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../api/AppUrl';
import HomeSlider from './HomeSlider'
import MegaMenu from './MegaMenu'

class HomeTop extends Component {

    constructor(){
        super();
        this.state = {
            MenuData: [],
        };
    }

    componentDidMount(){
        this.GetAllCategory();
    }

    GetAllCategory() {
        axios.get(AppUrl.allCategory)
            .then((response) => {
                this.setState({ MenuData: response.data });
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }

    render() {
        return (
            <Fragment>
                <Container className='text-center ' fluid={true}>
                    <Row>
                        <Col lg={3} md={3} sm={12}>
                            <MegaMenu data={this.state.MenuData} ></MegaMenu>
                        </Col>

                        <Col lg={9} md={9} sm={12}>
                            <HomeSlider></HomeSlider>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default HomeTop