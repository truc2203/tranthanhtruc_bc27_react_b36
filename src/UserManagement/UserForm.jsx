import React from 'react'

import axios from 'axios'


const UserForm =({userDetail})  => {
   
    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    const handleChange = () => {

    }
    // if(!userDetail)
    // {
    //     return
    // }
    return (
        
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="account" className="form-label">
            Account
          </label>
          <input
            id="account"
            className="form-control"
            value={userDetail.account}
            name="account"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            className="form-control"
            value={userDetail.name}
            name="name"
            onChange={handleChange}
          />
        </div>
      
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            className="form-control"
            value={userDetail.password}
            name="password"
            onChange={handleChange}
          />
        </div>
      
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            className="form-control"
            value={userDetail.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            className="form-control"
            value={userDetail.phone}
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <input
            id="type"
            className="form-control"
            value={userDetail.type}
            name="type"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-dark">Submit</button>
      </form>
    )
  
}
export default UserForm;
