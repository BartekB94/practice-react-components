import React from "react";

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const { lat, lng } = this.props
    const apiKey = '11d50ab196ba427990eee9027bd5506e'
    const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${apiKey}&lat=${lat}&lon=${lng}&lang=pl`

    fetch(apiUrl)
      .then(response => {
        if(response.ok) {
            return response.json()
        }
      })
      .then(data => {
        this.setState({ data })
      })
  }

  render() {
    const { data } = this.state

    if(data) {
      return (
        <div>
          <h1>Informacje o pogodzie</h1>
          <p>Temperatura: {data.data[0].temp}°C</p>
          <p>Opis: {data.data[0].weather.description}</p>
        </div>
      )
    }
    return null
  }
}

export default Weather
