import React, { Component } from 'react'
import axios from 'axios';
import { Image } from 'react-bootstrap';
import Header from './Companant/Header';
import Footer from './Companant/Footer';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      lat : {},
      lon : {},
      showMap : false,
    }
  }

  exploreForm = async(event) => {
    event.preventDefault()
    const location = event.target.userInput.value;
    const locationDetail = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${location}&format=json`)
    console.log(locationDetail);

    this.setState({
      locationData: locationDetail.data[0],
      lat:locationDetail.data[0],
      lon : locationDetail.data[0],
      showMap : true,
    });

  }
  render() {
    return (
      <div>
        <Header />
        <br></br>
        <form onSubmit={this.exploreForm}>
          <label>
            Location :
          </label>
          <input name="userInput" type="text" placeholder="Enter name of the city" />
          <input type="submit" value="Explore" />
        </form>

        <br></br>

        <div>
          <h1>location Detail</h1>
          {
            <p>
              {this.state.locationData.display_name}
            </p>
          }
          {
            <p>{this.state.locationData.lat}</p>
          }
          {
            <p>{this.state.locationData.lon}</p>
          }

        </div>
    {
            <Image
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&center=${this.state.locationData.lat},${this.state.locationData.lon}`}
            alt='map' />
          

          }


        <Footer />
      </div>
      
    )
  }
}

export default App
