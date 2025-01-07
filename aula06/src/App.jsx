import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import CityList from './components/CityList'
import { useEffect, useState } from 'react'

const BASE_URL = 'http://localhost:8000';

function App() {
  const [cities, setcities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function(){
    async function fetchCities(){
      setIsLoading(true)
      try {const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      setcities(data);
    } catch {
      alert('There was an error loading data');
    } finally {
      setIsLoading(false)
    }
  }
    fetchCities()
  },[])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='product' element={<Product />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='login' element={<Login/>} />
          <Route path='app' element={<AppLayout/>}>
            <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path='cities' element={<CityList cities={cities} isLoading={isLoading} />} />
            <Route path='countries' element={<p>Countries</p>} />
            <Route path='form' element={<p>Form</p>} />
          </Route>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
