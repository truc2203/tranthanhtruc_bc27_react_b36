import React,{Component} from 'react'

import axios from 'axios'


export default class UserForm extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        values:{
          account:'',
          name:'',
          password:'',
          email:'',
          phone:'',
          type:''
        }
      }
    }

     handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const {id,...payload} = this.state.values
          if(id){
            await axios.put(`https://62aa993a371180affbd7ccc8.mockapi.io/api/react/${id}`,payload)
            // console.log('put');

          }
          else{
            await axios.post(`https://62aa993a371180affbd7ccc8.mockapi.io/api/react`,payload)
            // console.log('post');

          }
        } catch (error) {
          console.log(error);
        }
        this.props.onSuccess()
        this.setState({values:{
          account:'',
          name:'',
          password:'',
          email:'',
          phone:'',
          type:''
        }})
    }

     handleChange = (e) => {
      const {name,value} = e.target
      this.setState((state) => ({values:{...state.values,[name]:value}}))
    }

    componentDidUpdate(prevProp,prevState)
    {
      if(this.props.userDetail && prevProp.userDetail !== this.props.userDetail)
      {
        this.setState({values:{...this.props.userDetail}})
      }
    }
    // if(!values)
    // {
    //     return
    // }
    render(){
      const {values} = this.state
      return (
        <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="account" className="form-label">
            Account
          </label>
          <input
            id="account"
            className="form-control"
            value={values.account}
            name="account"
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            className="form-control"
            value={values.name}
            name="name"
            onChange={this.handleChange}
          />
        </div>
      
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            className="form-control"
            value={values.password}
            name="password"
            onChange={this.handleChange}
          />
        </div>
      
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            className="form-control"
            value={values.email}
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            className="form-control"
            value={values.phone}
            name="phone"
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <input
            id="type"
            className="form-control"
            value={values.type}
            name="type"
            onChange={this.handleChange}
          />
        </div>
        <button className="btn btn-dark">Submit</button>
      </form>
    )
    }
    
  
}

