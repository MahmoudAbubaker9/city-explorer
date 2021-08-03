import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export class Weather extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    {   
                    <ListGroup.Item>
                        {this.props.date} ----- {this.props.description}
                    </ListGroup.Item>
                    }
                </ListGroup>
                <br />
            </div>
        )
    }
}

export default Weather
