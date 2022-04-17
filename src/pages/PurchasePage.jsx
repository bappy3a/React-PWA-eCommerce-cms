import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import Purchase from '../components/common/others/Purchase'

class PurchasePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <NavMenuDesktop />
                <Purchase />
                <FooterDesktop />
            </Fragment>
        )
    }
}

export default PurchasePage