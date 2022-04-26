import axios from 'axios';
import React, { Component, Fragment } from 'react'
import AppUrl from '../api/AppUrl';
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import ProductDetails from '../components/ProductDetails/ProductDetails'

class ProductDetailsPage extends Component {

    constructor({match}){
        super(); 
        this.state={
             code:match.params.code,
             ProductData:[],
        }
   }
    componentDidMount() {
        window.scroll(0, 0);
        axios.get(AppUrl.ProductDetails(this.state.code))
        .then(response =>{
            this.setState({ProductData:response.data});         
       }).catch(error=>{

       });
    }
    render() {
        return (
            <Fragment>
                <NavMenuDesktop />
                <ProductDetails data={this.state.ProductData} />
                <FooterDesktop />
            </Fragment>
        )
    }
}

export default ProductDetailsPage