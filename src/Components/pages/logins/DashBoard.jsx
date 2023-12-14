import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Dash.css";
import { useNavigate } from 'react-router-dom';
import sha256 from 'js-sha256';
import Error from '../../Error';
function DashBoard(props) {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [showDivs, setShowDivs] = useState(false);

  const navigate = useNavigate();
  const isAdmin = JSON.parse(localStorage.getItem("user"));
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/test/all")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [newName, newEmail, newPassword]);

  const addUser = () => {
    const newUser = {
      name: newName,
      email: newEmail,
      password:sha256(newPassword,10), // Hash the password
    };

    axios
      .post("http://localhost:8080/api/auth/signup", newUser)
      .then((response) => {
        setUsers([...users, response.data]);
        setNewName('');
        setNewEmail('');
        setNewPassword('');
        console.log('User was added successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function accessRow(user, id) {
    setShowDivs(true);
    setEditingIndex(id);
    setNewName(user.name);
    setNewEmail(user.email);
    setNewPassword(user.password);
  }

  const handleUpdate = () => {
    const updatedUser = {
      id: users[editingIndex].id,
      name: newName,
      email: newEmail,
      password:sha256(newPassword,10), // Hash the updated password
    };

    axios
      .put(`http://localhost:8080/api/auth/signup/${users[editingIndex].id}`, updatedUser)
      .then((response) => {
        alert("User updated successfully");
        const updatedUsers = [...users];
        updatedUsers[editingIndex] = response.data;
        setUsers(updatedUsers);
        setShowDivs(false);
        setNewName('');
        setNewEmail('');
        setNewPassword('');
      })
      .catch((error) => {
       alert("Error updating user:", error);
      });
  }

  function cancel() {
    setShowDivs(false);
    setNewName("");
    setNewEmail("");
    setNewPassword("");
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:8080/api/auth/signup/${id}`)
      .then(() => {
        setUsers((values) => {
          return values.filter((item) => item.id !== id);
        });
        alert("User deleted successfully");
      })
      .catch((error) => {
        alert("Error deleting user:", error);
      });
  };

  const renderItem = users?.map((user, id) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td><button onClick={() => accessRow(user, id)}>update</button></td>
        <td><button onClick={() => deleteUser(user.id)}>delete</button></td>
      </tr>
    );
  });

  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
console.log(isAdmin)
console.log(accessToken);
  return (
    
   <>
   {isAdmin?.roles[0] === "ROLE_ADMIN"?
<div className='main2'>
      <div className="sec-1">
        <div className='sec-2'>
          <div>
            <input
              onChange={(e) => setNewName(e.target.value)}
              value={newName}
              type="text"
              placeholder="name"
            />
          </div>
          <div>
            <input
              onChange={(e) => setNewEmail(e.target.value)}
              value={newEmail}
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              type="text"
              placeholder="password"
            />
          </div>
          <div className="btd">
            <button onClick={addUser} id="btn">
              Add User
            </button>
          </div>
          <div><button onClick={Logout}>Logout</button></div>
        </div>
        <div>
          {showDivs && (
            <div className='uc'>
              <div onClick={handleUpdate} className="sbtn">
                <div>save</div>
              </div>
              <div onClick={cancel} className="sbtn1">
                <div> Cancel</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <table className="tab">
        <thead id="td">
          <tr className="tb">
            <th>S.N</th>
            <th>Name</th>
            <th>EMAIL</th>
            <th>password</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {renderItem}
        </tbody>
      </table>
    </div> : <Error/> }
   </>
  );
}

export default DashBoard;
