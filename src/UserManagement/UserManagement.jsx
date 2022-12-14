import React, { Component } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";
export default class UserManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userId: "",
      userDetail:{
        account:'',
        name:'',
        password:'',
        email:'',
        phone:'',
        type:''
      }
    };
  }

  fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://62aa993a371180affbd7ccc8.mockapi.io/api/react"
      );
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  };

  fetchUsersDetails = async () => {
    try {
        const {data} = await axios.get(`https://62aa993a371180affbd7ccc8.mockapi.io/api/react/${this.state.userId}`)
        this.setState({userDetail:data})
        // console.log(this.state.userDetail);
    } catch (error) {
        console.log(error);
    }
  }

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(prevProp, prevState) {
    if(prevState.userId !== this.state.userId)
    {
        this.fetchUsersDetails()
    }
  }

  handleSelect =(userId) => {
    this.setState({userId})
  }
  

  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary">User Management</h1>

        <div className="card mb-5">
          <div className="card-header bg-dark text-white">
            <strong>User Form</strong>
          </div>
          <div className="card-body">
            <UserForm 
            userDetail={this.state.userDetail}
            onSuccess={this.fetchUsers}
            />
          </div>
        </div>

        <div className="card mb-5">
          <div className="card-header bg-dark text-white">
            <strong>User List</strong>
          </div>
          <div className="card-body">
            <UserList 
             users={this.state.users}
             onDelete={this.fetchUsers}
             onSelect={this.handleSelect} />
          </div>
        </div>
      </div>
    );
  }
}
