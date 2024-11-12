import React,{useState} from "react";
export default function Setformdata(){
    const [formdata,setFormdata ]=useState({})
    const [result,setResult] =useState("")
    const [array,setarray] =useState([])
 
    const _handleEmail =(e) => {
        setFormdata( {...formdata, [e.target.className]:e.target.value })
    }
    const _handlePassword =(e) => {
        setFormdata( {...formdata, [e.target.className]:e.target.value})
    }
    const _handleSubmit =(e) =>{
        e.preventDefault()
        setFormdata({
          userEmail:"",form2:""
        })
        let add = formdata.userEmail.replace("@gmail.com", "!");
        let add2= add.charAt(0).toUpperCase()+ add.slice(1);
        let value= "Hi"+ " " + add2;
        // formdata.userEmail=value
        // setResult(value)
        setarray([...array,value])
    }

    
    return(
        <>
        <form>
  <div className="mb-3">
    <label  className="form-label" >Email </label>
    <input type="email" className="userEmail" id="exampleInputEmail1" onChange={_handleEmail} value={formdata.userEmail}aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label  className="form-label" >Password</label>
    <input type="password" className="form2" onChange={_handlePassword} value={formdata.form2}id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={_handleSubmit}>Submit</button>
</form>
{array.map((y)=>(

<p>{y}</p>
)

)}

        </>
    )
}