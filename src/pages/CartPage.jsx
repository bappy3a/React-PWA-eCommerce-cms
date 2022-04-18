import React, { Component, Fragment } from 'react'
import Cart from '../components/Cart/Cart'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'

class CartPage extends Component {
    render() {
        return (
            <Fragment>
                <NavMenuDesktop />
                <Cart />
                <FooterDesktop />
            </Fragment>
        )
    }
}

export default CartPage