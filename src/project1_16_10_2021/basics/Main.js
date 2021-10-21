import {useState} from "react"
import Footer from "./footer" 
import Cards from "./cards" 

import "./style.css"

function Main(){
    const [data,setdata] = useState([]);
    const [loading,setloading] = useState(false);
    const loaduser = async()=>{
       
    const response = await fetch('https://reqres.in/api/users?page1');
    const json = await response.json();
    setloading(true);
    setTimeout(()=>{
        setloading(false);
    }, 5000);
    setdata(json.data);
    
    };
  
return  (<>
<nav className="navbar">
<nav className="title">Zippy</nav>
<button className="btn btn-primary" onClick={loaduser}>Get Users</button>
</nav>

<Cards loading={loading} data={data}/>

<Footer/>
</>

)
}

export default Main;