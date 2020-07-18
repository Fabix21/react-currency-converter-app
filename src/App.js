import React, {useEffect, useState} from 'react'
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.exchangeratesapi.io/latest'


function App() {
const [currencyOptions, setCurrencyOptions] = useState([])
const [fromCurrency, setFromCurrency ] = useState()
const [toCurrency, setToCurrency ] = useState()
const [exchangeRate, setExchangeRate ] = useState()

  useEffect(() => {
    fetch(BASE_URL).then(res => res.json())
    .then(data =>{
      const currency = Object.keys(data.rates)[19]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(currency)
      setExchangeRate(data.rates[currency])
    })
  }, [])

  return (
  <>
    <h1>Convert Currency</h1>
    <CurrencyRow
    currencyOptions={currencyOptions}
    selectedCurrency={fromCurrency}
    onChangeCurrency={e=> setFromCurrency(e.target.value)}
    />
    <div className="equals">=</div>
    <CurrencyRow
    currencyOptions={currencyOptions}
    selectedCurrency={toCurrency}
    onChangeCurrency={e=> setToCurrency(e.target.value)}

    />
     
  </>
  );
}

export default App;
