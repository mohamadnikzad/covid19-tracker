import React, { useEffect, useState } from 'react'
import './App.css';
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/Chart/Chart'
import Cards from './components/Cards/Cards'
import { fetchData } from './api';

const App = () => {
  const [data, setData] = useState({})
  const [isCountry, setIsCountry] = useState('')
  useEffect(() => {
    const fetchedData = async () => {
      setData(await fetchData())
    }
    fetchedData()

  }, [])

  const onChangeCountry = async (country) => {
    setData(await fetchData(country))
    setIsCountry(country)
  }
  return (
    <div className="App container">
      <img className='logo' src='https://i.ibb.co/7QpKsCX/image.png'></img>
      <Cards data={data} />
      <CountryPicker onChangeCountry={onChangeCountry} />
      <Chart isCountry={isCountry} data={data} />

    </div>
  );
}

export default App;
