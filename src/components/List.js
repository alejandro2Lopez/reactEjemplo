import React from "react";

const List = (props)=>{
    const {contents} =props;
if (!contents || contents.length ===0) return <h1>No hay usuarios</h1>

return (
    <ul>
        <h2>Estos son los usuarios</h2>
        {contents.map((content)=>{
            return (
               <div style={{background: "yellow", margin:"10px"}}>
                 <li key={content.id}>
                    <span><b>Nombre</b>{content.name}</span>
                        
                 </li>
               </div>
              
            )
        })}
    </ul>
);

}
export default List;