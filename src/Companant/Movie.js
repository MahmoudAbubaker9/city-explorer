import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';




export class Movie extends Component {
    render() {
        return (
            
            <div>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>title: <span>{this.props.title}</span></ListGroupItem>
                    <ListGroupItem>overview: <span>{this.props.overview}</span></ListGroupItem>
                    <ListGroupItem>popularity: <span>{this.props.popularity}</span></ListGroupItem>
                    <ListGroupItem>release_date: <span>{this.props.release_date}</span> </ListGroupItem>
                </ListGroup>

            </div>
        )
    }
}

export default Movie