import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import EmployeeNavbar from './EmployeeNavbar'

const Dashboard = () => {
    const apilink = "https://jsonplaceholder.typicode.com/users"
    const [users, setUsers]=useState([]);
    React.useEffect(()=>{
        axios.get(apilink).then((res)=>{
            setUsers(res.data)
        })
    },[])
  return (
    <div>
        <EmployeeNavbar/>
        <div className="row g-3" style={{margin: "10px"}}>
            {users.map((value)=>{
                return <div className="col col-12 col-sm-6 col-lg-4 col-md-4 col-xl-3 col-xxl-3">
                    <table className="table table-bordered border-success" style={{width:"20rem"}}>
                    <tbody>
                        <tr>
                            <th className='table-dark table-bordered border-success' scope= 'col'>User ID</th>
                            <td className='table-success table-bordered border-success'>{value.id}</td>
                        </tr>
                        <tr>
                            <th className='table-dark table-bordered border-success' scope= 'col'>Name</th>
                            <td className='table-success table-bordered border-success'>{value.name}</td>
                        </tr>
                        <tr>
                            <th className='table-dark table-bordered border-success' scope= 'col'>Email</th>
                            <td className='table-success table-bordered border-success'>{value.email}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            })}
        </div>



    </div>
  )
}

export default Dashboard