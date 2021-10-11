import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'


const UserList=()=> {
 const [data, setData] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios.get(
       "https://jsonplaceholder.typicode.com/users"
     );
     setData(result.data);
   };
   fetchData();
 }, []);
 return (
    <div >
        <table >
            <tr className="users">
                <th>Username</th> 
                <th>Name</th> 
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
            </tr>
            {data.map(item => (
                <tr key={item.id}>
                    <td><h4>{item.username}</h4></td> 
                    <td>{item.name}</td> 
                    <td>{item.email}</td>
                    <td>{item.address.street},{item.address.suite},{item.address.city}</td>
                    <td>{item.phone}</td>
                    <td><a href= {item.website}>{item.website}</a></td>
                    <td>{item.company.name}</td>
                </tr>
            ))}
        </table>
   </div> 
 );
}
export default UserList;
