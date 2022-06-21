import React, { useState, useEffect } from "react"
import { getFetch, postFecth, putFetch, deleteFetch} from "./components/FetchMethods";
import List from "./components/List"
import WithLoadingList from "./components/WithLoadingList";

function App() {
const LoadingList = WithLoadingList(List);
const [AppStateLoading, setAppStateLoading]= useState (false);
const [appStateObject, setAppstateObject]= useState(null);

const [name1, setName]= useState("")
const [message1, setMessage1]= useState("")

const [refresh, setRefresh]= useState(true)

const [nameEdit, setNameEdit]= useState ("");
const [idEdit, setIdEdit]= useState("")
const [message2, setMessage2]= useState("")

const [idDelete, setIdDelete]= useState("")
const [message3, setMessage3]= useState("")

useEffect (()=>{
if(refresh){
  setAppStateLoading(true);
  getFetch("medicines").then (val => setAppstateObject(val))
  setAppStateLoading(false);
  setRefresh(false)
}
},[setAppstateObject, setAppStateLoading, refresh])

const handleSubmit = async (e)=>{
  e.preventDefault();
  try {
    postFecth("medicines", {name: name1}).then(()=>{
      setName("")
      setMessage1("Creado correctamente")
      setRefresh(true)
    })
  } catch (error) {
    console.log(error)
  }
}

  const handleEdit = async (e)=>{
    e.preventDefault();
    try {
      putFetch(`medicines/${idEdit}`, {name: nameEdit}).then(()=>{
        setNameEdit("")
        setMessage2("Editado correctamente")
        setRefresh(true)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (e)=>{
    e.preventDefault();
    try {
      deleteFetch(`medicines/${idDelete}`).then(()=>{
        setIdDelete("")
        setMessage3("Borrado correctamente")
        setRefresh(true)
      })
    } catch (error) {
      console.log(error)
    }
  }


return (
  <div className="App">
    <div style={{borderStyle: "dashed"}}>
      <h2 className="firstTitle">ALEJANDRO LOPEZ LOPEZ</h2>
    </div>
    <div>
    <LoadingList isLoading={AppStateLoading} contents= {appStateObject}/>
    </div>
    <br/>
    <form onSubmit={handleSubmit}>
      <input
      type= "text"
      value={name1}
      placeholder= "Nombre del medicamento"
      onChange = {(e)=> setName(e.target.value)}
      />
    <div>
      {message1 ? <p>{message1}</p> :null}
    </div>
    <button type="submit"> Crear</button>
    </form>
    
    <br></br>

    <form onSubmit={handleEdit}>
      <input
      type= "text"
      value={idEdit}
      placeholder= "identificador"
      onChange = {(e)=> setIdEdit (e.target.value)}
      />
      <input
      type= "text"
      value={nameEdit}
      placeholder= "Nombre a edita"
      onChange = {(e)=> setNameEdit (e.target.value)}
      />
       <div>
      {message2 ? <p>{message2}</p> :null}
    </div>
    <button type="submit"> Editar</button>
    </form>
    <br></br>
    <form onSubmit={handleDelete}>
      <input
      type= "text"
      value={idDelete}
      placeholder= "Id a eliminar"
      onChange = {(e)=> setIdDelete (e.target.value)}
      />
     <div>
      {message3 ? <p>{message3}</p> :null}
    </div>
      <button type="submit"> Eliminar</button>

    </form>
   

  </div>
) 
}


export default App;
