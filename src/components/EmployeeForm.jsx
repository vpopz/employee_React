import React from 'react'
import { useState } from 'react'
import EmployeeNavbar from './EmployeeNavbar'

const EmployeeForm = () => {
    const [input,setInput]=useState({})

    const changeData = (event)=>{
        setInput({
            ...input,[event.target.name]:event.target.value
        })
    }
    const clickAddEvent=() =>{
        console.log(input)
    }
  return (
    <div>
        <EmployeeNavbar/>
        <div className="container">
            <div className="row g-2" style={{margin: '40px 10px 0 10px'}}>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-2">
                        <div className="col-12">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input name="name" type="text" className="form-control" onChange={changeData} />
                        </div>
                        <div className="col-12">
                        <label htmlFor="" className="form-label">DESIGNATION</label>
                            <input name="designation" type="text" className="form-control" onChange={changeData} />
                        </div>
                        <div className="col-md-6">
                        <label htmlFor="" className="form-label">LOCATION</label>
                            <input name="location" type="text" className="form-control" onChange={changeData} />
                        </div>
                        <div className="col-md-6">
                        <label htmlFor="" className="form-label">SALARY</label>
                            <input name="salary" type="text" className="form-control" onChange={changeData} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={clickAddEvent} className="btn btn-primary">ADD EMPLOYEE</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default EmployeeForm