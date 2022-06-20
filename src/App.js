import React, { useState, useEffect } from "react"
import List from "./components/List"
import WithLoadingList from "./components/WithLoadingList";
function App() {

const LoadingList = WithLoadingList(List);
const [appState, setAppState] = useState ({loading: false, users: null})

useEffect (()=>{
  setAppState({loading: true});
  fetch(process.env.REACT_APP_API_URL)
  .then((res)=>res.json())
  .then((users)=> {setAppState({loading: false, users: users})})
},[setAppState])
return (
  <div className="App">
    <div style={{borderStyle: "dashed"}}>
      <h2 className="firstTitle">ALEJANDRO LOPEZ LOPEZ</h2>
    </div>
    <div>
      <LoadingList isLoading={appState.loading} users={appState.users}></LoadingList>
    </div>
  </div>
) 

}

export default App;
