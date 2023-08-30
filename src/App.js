import { useEffect, useState } from "react";
import "./App.css";

import TripList from "./components/TripList/index.js";

function App() {
  // let [show, setShow] = useState(true);

  let [data,setData] = useState('my data');

  let myFunction  = ()=>{
    setData ("update data ");
  }

  useEffect(()=>{
    myFunction()
    console.log("running");
  },[myFunction])
  return (
    <TripList />
    // <>
    //   <button onClick={() => setShow(!show)}>hide trips</button>
    //   { show && <TripList />}
    // </>
  );
}

export default App;
