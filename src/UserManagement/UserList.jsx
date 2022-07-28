import React from "react";
import axios from 'axios'

const UserList = ({users, onSelect,onDelete}) => {

    const handleSelect = (userId) =>{
        onSelect(userId)
    }

    const handelDelete = async (userId) => {
        try {
            await axios.delete(`https://62aa993a371180affbd7ccc8.mockapi.io/api/react/${userId}`)
            onDelete()
        } catch (error) {
             console.log(error);
         }
    }


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
                    <button onClick={() => handleSelect(user.id)} className="btn btn-success me-2">Update</button>
                    <button onClick={() => handelDelete(user.id)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            )
        })}
      </tbody>
    </table>
  );
};

export default UserList;
