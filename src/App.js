import React,{useEffect, useState} from 'react'; 
import './App.css';
import { Player } from './Player';
import Login from "./Login";
import {useStore} from "./store/Store"
import {authh} from "./store/firebase"
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import {Navbar} from "./Navbar"
import Calender from "./Calender"
import Projects from "./Projects"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function App() {
  const {user, loading, setUser, setLoading,} = useStore()
  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    const unsubscribe = authh.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])
  if(loading){
    return <div className="mt-9"><ClipLoader color={color}  css={override} size={150} /></div>
  }
  
  return (
    <>
    {!user? <Login/>:
    <Router>
    <Navbar/>
    <Route exact path="/">
    <Player/>
    </Route>
    <Route path="/calender">
        <Calender/>
    </Route>
    <Route path="/projects">
          <Projects/>
    </Route>
    </Router>}
    </>
  );
}

export default App;
