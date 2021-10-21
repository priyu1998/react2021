import React from 'react'


export default function Navbar(props){
return (<>
<nav className="navbar">
<nav className="title">Hello</nav>
<button className="btn btn-primary" onClick={props.loaduser}>Fetch</button>
</nav>
</>
)
}
