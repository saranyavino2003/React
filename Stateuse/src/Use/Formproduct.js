import React, { useState } from "react";
export default function Tablesubmit() {
  const [formdata, setFormdata] = useState({});
  const [status, setStatus] = useState(false);
  const [data,setdata] = useState([])
  const handleSubmit = (e) => {
      e.preventDefault();
      setStatus(true);
      console.log(formdata);
  };


  return (
             <>
            <form onSubmit={handleSubmit} class="mb-4">
                <div class="mb-3">
                    <label for="product-name">product </label>
                    <input  type="product" class="form-control" id="product" aria-describedby="emailHelp"
                        onChange={(s) => setFormdata({ ...formdata, [s.target.id]: s.target.value })}
                        />
                    
                </div>
                <div class="mb-3">
                    <label for="quantity">quantity</label>
                    <input type="quantity" class="form-control" id="quantity" 
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

            {data && data.length > 0 && (
        <table class="table table-striped">
          <thead>
            <tr>
              <th>product</th>
              <th>quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => (
              <tr key={index}>
                <td>{val.product}</td>
                <td>{val.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table> 
      )}
        </>
    )
}