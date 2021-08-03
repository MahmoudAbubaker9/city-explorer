/* eslint-disable no-use-before-define */
import React, { Component } from 'react'
import axios from 'axios';
import { Image } from 'react-bootstrap';
import Header from './Companant/Header';
import Footer from './Companant/Footer';
// import Weather from './Companant/Weather';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      lat : {},
      lon : {},
      showMap : false,
      errorImg : false,
      weatherData: []
    }
  }

  exploreForm = async(event) => {
    event.preventDefault()
    const location = event.target.userInput.value;
    
    try{
    
    const locationResponse = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${location}&format=json`);
    let locationDetail = locationResponse.data[0];
    let cityName = locationDetail.display_name.split(',')[0];
    let responseWeather = await axios.get(`${process.env.REACT_APP_SERVER_URL}/Weather?searchQuery=${cityName}&lat=${locationDetail.lat}&lon=${locationDetail.lon}`);
    // let locationData = locationResponse.data[0];
    
    this.setState({
      locationData: locationDetail,
      showMap : true,
      errorImg : false,
      weatherData: responseWeather.data[0],
      
    });
  }
  catch {
    this.setState({
    showMap : false,
    errorImg : true
  })
  }

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
    { this.state.showMap &&
            <Image
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&center=${this.state.locationData.lat},${this.state.locationData.lon}`}
            alt='map' />
          

          }

          { this.state.errorImg &&
            <Image
            src={`https://www.macademy.in/static/media/error.62518dc1.gif`}
            alt='map' />
          }

          {/* {
            this.state.weatherData.map(wether => {
              return(
              <div>
                <p> weather.valid_date
                </p>
                <p> weather.description
                </p>
              </div>
              )
            } )
          } */}


        <Footer />
      </div>
      
    )
  }
}

export default App
