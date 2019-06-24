import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem, CardText, CardBody, CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';


class Menu extends Component {
    // constructor(props) {
    //     super(props);


    // }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <Link to={`/menu/${dish.id}`}>
                        <CardImg width='100%' object src={dish.image} alt={dish.name} /> 
                        <CardBody>
                            <CardTitle>
                                {dish.name}
                            </CardTitle> 
                            <CardBody>
                                {dish.description}
                            </CardBody>                       
                        </CardBody>
                    </Link>
                </Card>
            )
        } else {
            return  (
                <div></div>
            );
        }

    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                            <CardImg width='100%' object src={dish.image} alt={dish.name}/>
                            <CardImgOverlay>
                                <CardTitle heading>
                                    {dish.name}
                                </CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div> 
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                            <BreadcrumbItem>
                            <Link active>Menu</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div> 
                </div>
                <div className='row'>
                        {menu}
                </div>
                <div className='row'>
                    {/* {this.renderDish(this.state.selectedDish)} */}
                    {/* {
                        this.state.selectedDish ? <DishdetailComponent dish={this.state.selectedDish} comments={this.state.selectedDish.comments} /> : ''
                    } */}
                    
                </div>
            </div>  
        );
    }
}


export default Menu;
