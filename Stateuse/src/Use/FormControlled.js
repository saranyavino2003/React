// import { useState } from "react";
// export default function FormControlled(){
//     const [age,setAge]= useState("");

//     function onNameChange (e){
//         const age1=e.target.value;
//         if(age1<=150)
//             setAge(age1);
//     }
//     return(
//         <>
//         <form>
//             <input type="Number" id="Age" onChange={(e) => {onNameChange(e)}} value={age}/>
//         </form>
//         <p>{age}</p>
//         </>
//     )
// }

// import React, { useState } from 'react';
// export default function Formstate2() {
//     const [formdata, setFormdata] = useState({});

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormdata(prevData => ({ ...prevData, [id]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic h
//         console.log(formdata);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" name="name" required onChange={handleChange} />

//             <label htmlFor="email">Email:</label>
//             {/* <input type="email" id="email" name="email" required onChange={handleChange} /> */}

//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" name="password" required onChange={handleChange} />

//             <label htmlFor="phone">Phone Number:</label>
//             <input type="tel" id="phone" name="phone" required onChange={handleChange} />

//             <input type="submit" id="button" value="Register" />
//       <p>{formdata.name ? formdata.name: ""}</p>
//       <p>{formdata.password ? formdata.password: ""}</p>
//       <p>{formdata.examplecheck1 ? formdata.examplecheck1 : ""}</p>
//       <p>{formdata.phone ? formdata.phone : ""}</p>
//         </form>
//     );
// }