import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import"../Css/Datacss.css";
import Loginimg from '../Images/Loginimg.png';

function  FetchData() {
    const [info, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/crops-data/")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])
    return(
        <>
        <Navbar/>

        

        <tbody>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Image</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>

          {info.map((item, index)=>(
             <tr key={index}>
             <td>{item.region}</td>
             <td>{item.climate}</td>
             <td>{item.price}</td>
             <td>{item.rating}</td>
           </tr>
          ))}


        </tbody>
        
        <div className="backgrd">
        <img alt="loginimg" src={Loginimg}/>
        </div>

        </>
    )
}
export default FetchData;