import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import Menu from './MenuComponent.js'
class DishDetail extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dishes: null
    }
  }
  renderDetail(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
          </div>
          <div className="col-12 col-md-4">
          </div>
        </div>
      </div>
    )
  }
  
}
export default DishDetail
