// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoData} = this.props

    return (
      <div className="crypto-tracker-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="bg-image"
        />
        <div className="tracker-table">
          <div className="table-header">
            <p className="column-title">Coin Type</p>
            <div className="currency-type-headers">
              <p className="column-title text-right">USD</p>
              <p className="column-title text-right">EURO</p>
            </div>
          </div>
          <ul className="crypto-list">
            {cryptoData.map(eachCrypto => (
              <CryptocurrencyItem
                key={eachCrypto.id}
                cryptoDetails={eachCrypto}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
