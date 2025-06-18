// src/pages/UserPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then((response) => {
        setUsers(response.data.users); // Ambil array dari field `users`
      })
      .catch((error) => {
        console.error('Gagal fetch data users:', error);
      });
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">User List</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-bold text-gray-800">User ID: {user.id}</h2>
            <p className="text-sm text-gray-600">
              Name: {user.firstName} {user.lastName}
            </p>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-600">Phone: {user.phone}</p>
            <p className="text-sm text-gray-600">Gender: {user.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
