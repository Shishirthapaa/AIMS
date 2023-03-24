import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';

const  Data=()=>{
    const [datas, setData] = useState([])

  const fetchData = () => {
    fetch("http://localhost:8000/crops-data/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
    return(
        <>
        <Navbar/>

        <div className="App">
        <header className="App-header">
        <h2>Crop Data</h2>
        </header>
        <div className="user-container">
        <h5 className="info-item">{datas.name}</h5>
        <h5 className="info-item">{datas.region}</h5>
        <h5 className="info-item">{datas.climate}</h5>
        <h5 className="info-item">{datas.rainfall}</h5>
        </div>
        </div>

        </>
    )
}
export default Data;