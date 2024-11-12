import React, { useState } from "react";
export default function Tablesubmit() {
    const [formdata, setFormdata] = useState({});
    const [status, setStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus(true);
        console.log(formdata);
    };


    return (
        <>
            <form onSubmit={handleSubmit} class="mb-4">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email </label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                        onChange={(s) => setFormdata({ ...formdata, [s.target.id]: s.target.value })}
                    />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" 
                        onChange={(s) => setFormdata({ ...formdata, [s.target.id]: s.target.value })}
                    />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"
                        onChange={(s) => setFormdata({ ...formdata, [s.target.id]: s.target.value })}
                    />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            {status?<>
                <p>email:{formdata.email}</p>
                <p>password:{formdata.password}</p>
            </>:""}
           </>
    )
}

