import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem,Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, } from 'reactstrap'
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    } else {
        return <div></div>
    }
}


function RenderComments({ comments}) {
    if (comments != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                    {
                        comments.map((comment, i) => {
                            return (
                                <ul className='list-unstyled' key={comment.id}>
                                    <li>
                                        <div>{comment.comment}</div>
                                        <div>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}`}</div>
                                    </li>
                                </ul>
                            )
                        })
                    }
            </div>

        )
    } else {
        return <div></div>
    }
}



const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className='container'>
                <div className="row">
                    <Breadcrumb>

                        {/* <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem> */}
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments
                        comments={props.comments}
                    />
                </div>
            </div>
        )
}

export default DishDetail