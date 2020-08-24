import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends React.Component {

       state = {
           selectedDish: null,
           show:false
       }

  menu=()=>{
      return this.props.dishes.map((dish) => {
        return (
          <div className="col-12 col-md-4 mt-5" key={dish.id} onClick={()=>this.props.click(dish.id)} >
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
            <div className="col-12 col-md-10 m-2" style={{display:dish.show ? 'block' : 'none'}} >
            <Card>
              <CardText>{dish.description}</CardText>
            </Card>
          </div>
          </div>
        );
      });
  }

   render() {

       return (
           <div className="container">
               <div className="row">
                   {this.menu()}
               </div>
           </div>
       );
   }
}
export default Menu
