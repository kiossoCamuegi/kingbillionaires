import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function App() {
  const [Data, setData] =  useState([]);


  const options = {
    method: 'GET',
    url: 'https://forbes-worlds-billionaires-list.p.rapidapi.com/billionaires/2023',
    params: {
      page: '0',
      size: '100',  
    },
    headers: {
      'X-RapidAPI-Key': 'fbd48140f6mshddb243ba3f84633p11ae37jsnb7dba73e009b',
      'X-RapidAPI-Host': 'forbes-worlds-billionaires-list.p.rapidapi.com'
    }
  };
  

  const loadData  =  async()=>{
      try { 
          const response = await axios.get("https://datasets-server.huggingface.co/rows?dataset=nateraw%2F100-richest-people-in-world&config=default&split=train&offset=0&length=100");
          console.log(response.data.rows);
          setData(response.data.rows);
      } catch (error) {
          console.log(error)
      }
  }


  useEffect(() => {
    loadData();
  }, [])


  return (
    <div className="container-box"> 
         <div className='line'>Tracking the world 100 richest people</div>
         <br/>   <br/>   <br/>   <br/>   <br/>
        <div className='col-items'> 
          <Table striped bordered responsive hover variant="dark">
            <thead>
              <tr>
                <th>Place</th>
                <th>Name</th>
                <th>Industry</th>
                <th>Age</th>
                <th>Source</th>
                <th>NetWorth</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((item, index)=>{
                  return(
                    <tr>
                      <td><h4>{index+1}</h4></td>
                      <th><h4>{item.row.Name}</h4> </th>
                      <th><h4>{item.row.Industry}</h4></th>
                      <td><h4>{item.row.Age}</h4> </td>
                      <th><h4>{item.row.Source}</h4> </th>
                      <td><h4>{item.row.NetWorth}</h4> </td> 
                   </tr>)
              })} 
            </tbody>
          </Table>  
        </div>
    </div>
  );
}

export default App;
