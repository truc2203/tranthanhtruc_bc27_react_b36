import React,{Component} from "react";
import axios from 'axios'

export default class UserList extends Component {

     handleSelect = (userId) =>{
        this.props.onSelect(userId)
    }

     handelDelete = async (userId) => {
        try {
            await axios.delete(`https://62aa993a371180affbd7ccc8.mockapi.io/api/react/${userId}`)
            this.props.onDelete()
        } catch (error) {
             console.log(error);
         }
    }

    render(){
      const {users} = this.props
      return (
        <table className="table">
          <thead>
            <tr>
            <th>STT</th>
            <th>Tài khoản</th>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Số ĐT</th> 
            <th>Loại người dùng</th>
            </tr>
            
          </thead>
          <tbody>
            {users.map((user) => {
                return(
                    <tr key={user.id}>
                        <td>{user.account}</td>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.type}</td>
                        <td>
                        <button onClick={() => this.handleSelect(user.id)} className="btn btn-success me-2">Update</button>
                        <button onClick={() => this.handelDelete(user.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                )
            })}
          </tbody>
        </table>
      );
    }
 
};


