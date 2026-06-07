// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: true,
    cryptoData: [],
  }

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()

    // Converting snake_case from API response to camelCase
    const formattedData = fetchedData.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({
      cryptoData: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, cryptoData} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoData={cryptoData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
