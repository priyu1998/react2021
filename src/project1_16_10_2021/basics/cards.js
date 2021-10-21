
import Carditem from "./item.js" 

// import Navbar from "./Navbar"
export default function Cards(props){


return (

    <>
  
<div className="card_container">
    
    <Carditem loading={props.loading} data={props.data}/>
    
</div>
    </>
)
}

