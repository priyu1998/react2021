
import Loading from './loading.js';

export default function Carditem(props){
 
 
// const Getuser = () => {
//     useEffect(()=>{
//     loaduser();

//     }, []);
// };

    
        
        return (
        <>

     {props.loading?<Loading/>:props.data.map((val) =>
        <div className="card">
            <div className="card_title">Id : {val.id}</div>
    
            <div className="card-body">
            <img className="card_img" src={val.avatar} alt="No Found"/>
            </div>
        <div className="card-footer">
            <span>
                <p>First Name : {val.first_name}</p>
                <p>Last Name : {val.last_name}</p>
                <p>Email : {val.email}</p>
            </span>
        </div>
    
        </div>
        )}
        </>
    )
    
    };
