import React from "react";

const List = (props)=>{
    const {users} =props;
if (!users || users.length ===0) return <h1>No hay usuarios</h1>

return (
    <ul>
        <h2>Estos son los usuarios</h2>
        {users.map((user)=>{
            return (
               <div style={{background: "yellow", margin:"10px"}}>
                 <li key={user.id}>
                    <span><b>Nombre</b>{user.name}</span>
                    <span><b>Compania</b>{user.company.name}</span>
                </li>
               </div>
              
            )
        })}
    </ul>
);

}
export default List;