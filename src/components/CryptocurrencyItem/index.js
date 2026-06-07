// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="crypto-item-row">
      <div className="logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="values-container">
        <p className="currency-value text-right">{usdValue}</p>
        <p className="currency-value text-right">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
