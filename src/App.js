import React, { Component } from 'react'
import axios from 'axios';
import { Image } from 'react-bootstrap';
import Header from './Companant/Header';
import Footer from './Companant/Footer';
import WeatherDay from './Companant/WeatherDay';
import Movie from './Companant/Movie';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      lat: {},
      lon: {},
      showMap: false,
      errorImg: false,
      weatherData: [],
      moviesData: []
    }
  }

  exploreForm = async (event) => {
    event.preventDefault()
    const location = event.target.userInput.value;

    try {

      const locationResponse = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${location}&format=json`);
      let locationDetail = locationResponse.data[0];
      let cityName = locationDetail.display_name.split(',')[0];
      let responseWeather = await axios.get(`${process.env.REACT_APP_SERVER_URL}/Weather?searchQuery=${cityName}&lat=${locationDetail.lat}&lon=${locationDetail.lon}`);
      // let locationData = locationResponse.data[0];
      const responseMovie = await axios.get(
        `http://localhost:8080/movies?searchQuery=${cityName}`)
//https://api.themoviedb.org/3/search/movie?api_key=992fe12456d0d0967c74f866b0c6a03b&page=1&query=amman
      this.setState({
        locationData: locationDetail,
        showMap: true,
        errorImg: false,
        weatherData: responseWeather.data,
        moviesData: responseMovie.data

      });
    }
    catch {
      this.setState({
        showMap: false,
        errorImg: true
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
        {this.state.showMap &&
          <Image
            src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&center=${this.state.locationData.lat},${this.state.locationData.lon}`}
            alt='map' />


        }

        {this.state.errorImg &&
          <Image
            src={`https://www.macademy.in/static/media/error.62518dc1.gif`}
            alt='map' />
        }

        {
          this.state.weatherData.map(item => <WeatherDay date={item.valid_date} description={item.description} />)
        }

        {
          this.state.moviesData.map(item =>
            <Movie
              title={item.title}
              overview={item.overview}
              popularity={item.popularity}
              release_date={item.release_date}
              
               />)
        }

        <Footer />
      </div>
    )
  }
}

export default App
