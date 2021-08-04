import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export class WeatherDay extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <ListGroup>
                    {   
                    <ListGroup.Item>
                     <p>  'this date'</p> {this.props.valid_date} ----- {this.props.description}
                    </ListGroup.Item>
                    }
                </ListGroup>
                <br />
            </div>
        )
    }
}

export default WeatherDay