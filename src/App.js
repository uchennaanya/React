import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';


class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        dishes: DISHES
      };
    }

    handleClick =(id)=>{
     const newData=this.state.dishes.map(dish=>{
       if(dish.id === id){
         dish.show =!dish.show
       }
       return dish
     })
     this.setState({dish:[...this.state.dishes, {newData}]})
   }
render() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Con Fusion </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} click={this.handleClick} />
    </div>
  );
}

}

export default App;
