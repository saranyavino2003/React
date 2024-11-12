import logo from './logo.svg';
import './App.css';
import Tablerow from './format/Tablerow';
import Table from './format/Table';
import Othertab from './Othertab';
import Fivetab from './Fivetab';


function App() {
  const users= [
    {
      "id": 1,
      "firstName": "Emily",
      "age": 28,
      "gender": "female",
      "email": "emily.johnson@x.dummyjson.com",
    },
    {
      "id": 2,
      "firstName": "Michael",
      "age": 35,
      "gender": "male",
      "email": "michael.williams@x.dummyjson.com",
      
    },
    {
      "id": 3,
      "firstName": "Sophia",
      "age": 42,
      "gender": "female",
      "email": "sophia.brown@x.dummyjson.com",
     
    },
   
    {
      "id": 4,
      "firstName": "James",
      "age": 45,
      "gender": "male",
      "email": "james.davis@x.dummyjson.com",
    },
    {
      "id": 5,
      "firstName": "Emma",
      "age": 30,
      "gender": "female",
      "email": "emma.miller@x.dummyjson.com",
    },
    {
      "id": 6,
      "firstName": "Olivia",
      "age": 22,
      "gender": "female",
      "email": "olivia.wilson@x.dummyjson.com",
     
    },
    {
      "id": 7,
      "firstName": "Alexander",
      "age": 38,
      "gender": "male",
      "email": "alexander.jones@x.dummyjson.com",
    
    },
    {
      "id": 8,
      "firstName": "Ava",
      "age": 27,
      "gender": "female",
      "email": "ava.taylor@x.dummyjson.com",
    },
    {
      "id": 9,
      "firstName": "Ethan",
      "age": 33,
      "gender": "male",
      "email": "ethan.martinez@x.dummyjson.com",
     
    },
    {
      "id": 10,
      "firstName": "Isabella",
      "age": 31,
      "gender": "female",
      "email": "isabella.anderson@x.dummyjson.com",
      "phone": "+49 770-658-4885",
    }
  ]
  return (
    <>

   
    <table>
      <tr>
        <th>firstName</th>
        <th>age</th>
        <th>gender</th>
      </tr>
      {users.map((i)=>
       <tr>    
        <td>{i.firstName}</td>
        <td>{i.age}</td>
        <td>{i.gender}</td>
      </tr>
        )}
    </table>
    <Tablerow/>
    <Table/>
    <Othertab/>
    <Fivetab/>
  </> 
  )
}

export default App;
