import React from 'react';

import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishdetailComponent from './DishdetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import { Switch, Redirect, Route } from "react-router-dom";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            // selectedDish: null
        }
    }

    // onDishSelect(dishId) {
    //     console.log(dishId);
    //     this.setState({
    //         selectedDish: dishId
    //     });
    // }

    render() {
        return (
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path='/home' component={HomeComponent} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent/>
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                {
                    this.state.selectedDish ?
                        <DishdetailComponent 
                        dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> : ''
                    } */}
            </div>
        );
    }

}

export default Main;
