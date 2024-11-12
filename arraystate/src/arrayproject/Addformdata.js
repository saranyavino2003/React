import React,{useState} from "react";
export default function Addformdata(){
    const [formdata,setFormdata] = useState({})
    const[result,setResult]=useState("")
    const [array,setarray] = useState([]);

    const _handleEmail =(e) =>{
        setFormdata ({...formdata,userEmail:e.target.value})
    }
    const _handlePassword =(e) =>{
        setFormdata ({...formdata,userPassword:e.target.value})
    }
    const _handleSubmit =(e) =>{
        e.preventDefault()
        

        let name= formdata.userEmail ;
        // setarray(array);
    }

    return(
        <>
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" onChange={_handleEmail}  aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label" onChange={_handlePassword} >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={_handleSubmit}>Submit</button>
</form>

<p> userEmail:{}</p>
<p> password:{}</p>
        </>
    )
}