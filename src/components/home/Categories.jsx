import axios from 'axios';
import { constants } from 'buffer'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../api/AppUrl';

class Categories extends Component {

    constructor(){
        super();
        this.state = {
            categories:[],
        }
    }
    
    componentDidMount(){
        this.getCategoyrs();
    }

    getCategoyrs(){
        axios.get(AppUrl.allCategory)
            .then((response) => {
                this.setState({ categories: response.data });
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }    

    render() {

        const CatList = this.state.categories;

        const MyView = CatList.map((CatList,i)=>{

            return <Col className='p-1' key={i.toString()} xl={2} lg={2} md={2} sm={6} xs={6}>
                
                    <Card className='h-100 w-100 text-center'>
                        <Card.Body>
                            <img className='center' src={CatList.category_image} alt="" />
                            <h5 className='categoyr-name'>{CatList.category_name}</h5>
                        </Card.Body>
                    </Card>
                </Col>
        })

        return (
            <Fragment>
                <Container>
                    <div className='section-title text-center mb-55'>
                        <h2>Categorys</h2>
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

export default Categories