import { useState } from "react";

export default function Input() {
  const [formdata, setFormdata] = useState({});

  return (
    <>
      {/* <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={(s) => setFormdata({...formdata,[s.target.id]: s.target.value})}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(s) => setFormdata({...formdata,[s.target.id]: s.target.value})}

          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button> */}
      {/* </form> */}
      {/* <p>{formdata.name ? formdata.name : ""}</p> */}
      {/* <p>{formdata.exampleInputPassword1 ? formdata.exampleInputPassword1 : ""}</p> */}
      {/* <p>{formdata.age ? formdata.age : ""}</p>
      <p>{formdata.phone ? formdata.phone : ""}</p> */}

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="email" class="form-control" id="name" aria-describedby="emailHelp"
          onChange={(s) => setFormdata({...formdata,[s.target.id]: s.target.value})}
          />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">phone</label>
          <input type="password" class="form-control" id="phone"
          onChange={(s) => setFormdata({...formdata,[s.target.id]: s.target.value})}
          />

        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <p>name:{formdata.name ? formdata.name : ""}</p>
       { <p>phone:{formdata.phone ? formdata.phone : ""}</p> }
      

    </>
  );
}
