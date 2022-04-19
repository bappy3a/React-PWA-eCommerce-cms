import axios from 'axios'
import React, { Component, Fragment } from 'react'
import AppUrl from '../api/AppUrl'
import FooterDesktop from '../components/common/FooterDesktop'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeatureProducts from '../components/home/FeatureProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'

class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    this.GetVisitorDetails();
  }

  GetVisitorDetails =()=>{
    axios.get(AppUrl.VisitorDetails)
    .then()
    .catch()
  }

  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <HomeTop />
        <Categories />
        <FeatureProducts />
        <NewArrival />
        <Collection />
        <FooterDesktop />
      </Fragment>
    )
  }
}

export default HomePage