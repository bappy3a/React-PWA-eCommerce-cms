class AppUrl {
  static BaseURL = "http://admin-ecom.test/api"
  static VisitorDetails = this.BaseURL+"/getvisitor"
  static PostContact = this.BaseURL+"/postcontact"
  static allCategory = this.BaseURL+"/allcategory"
  static allFeature = this.BaseURL+"/productlistbyremark/FEATURE"
  static allArrival = this.BaseURL+"/productlistbyremark/ARRIVAL"
  static allSlider = this.BaseURL+"/allslider"

  static ProductDetails(code){
    return this.BaseURL+"/productdetails/"+code;
  }
}

export default AppUrl