import React,{useEffect, useState} from 'react'
import axios from 'axios'

const List = () => {

let [allSeeker, setAllSeeker] = useState([]);

useEffect (()=>{
  axios.get("http://localhost:3000/api/v1/seeker")
  .then(response =>{
    setAllSeeker(response.data);
  })
  .catch(error => {
    console.error("API Error:", error);
  });
},[])


  return (
    <div className="container">
          <div className="page-inner">
            <h2>Seeker Listing Page</h2>
            <table className='table table-dark'>
              <thead>
                <tr>
                  <th>
                    S.NO
                  </th>
                  <th>
                    FullName
                  </th>
                  <th>
                    Email
                  </th>
                  <th>
                  Contact
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  allSeeker.map((item, index)=>{
                    return (
                      <tr>
                        <td>
                          {index+1}
                        </td>
                        <td>
                          {item.fullname}
                        </td>
                        <td>
                          {item.email}
                        </td>
                        <td>
                          {item.contact}
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>

            </table>

          </div>
          </div>
  )
}

export default List