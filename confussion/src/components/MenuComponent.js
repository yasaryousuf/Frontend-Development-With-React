import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {
    // constructor(props) {
    //     super(props);


    // }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width='100%' object src={dish.image} alt={dish.name} /> 
                    <CardBody>
                        <CardTitle>
                            {dish.name}
                        </CardTitle> 
                        <CardBody>
                            {dish.description}
                        </CardBody>                       
                    </CardBody>
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
                    <Card onClick={()=>this.props.onClick(dish.id)}>
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
