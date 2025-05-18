import React ,{useEffect , useState} from "react"
import axios from "axios"

const List = () => {

  let [allOwner,setAllOwner] = useState ([]);

  useEffect(()=>{
    // console.log(response.data)
    axios.get("http://localhost:3000/api/v1/owner")
    .then(response =>{
      setAllOwner(response.data);
    })
    .catch(error => {
      console.error("API Error:", error);
    });

  },[])

  return (
    <div className="container">
          <div className="page-inner">
            <h2>
             Listing Page Of Owner
            </h2>
            <table className='table table-dark'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>FullName</th>
                  <th>Email</th>
                  <th>Contact</th>
                </tr>

            
              </thead>
              <tbody>
                {
                  allOwner.map((item,index) =>{
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