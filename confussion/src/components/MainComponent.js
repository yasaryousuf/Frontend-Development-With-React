import React from 'react';

import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishdetailComponent from './DishdetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ContactComponent from './ContactComponent';
import HomeComponent from './HomeComponent';
import { Switch, Redirect, Route } from "react-router-dom";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
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

        const HomePage = () => {
            return (
                <HomeComponent
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }
        return (
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path='/contactus' component={ContactComponent} />
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
