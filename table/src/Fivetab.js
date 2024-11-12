export default function (){
    const index = [
        {
         "value": "2.0",
         "system": "computer",
         "users": "arun",
         "time": "10"
        },
        {
            "value": "5.0",
            "system": "mobile",
            "users": "vasi",
            "time": "12"
        },
        {
            "value": "3.0",
            "system": "tab",
            "users": "praveen",
            "time": "8"
        },
        {
            "value": "7.0",
            "system": "laptop",
            "users": "ajith",
            "time": "5"
        }
    ]
    return(
        <>
        <table>
      <tr>
        <th>value</th>
        <th>system</th>
        <th>users</th>
        <th>time</th>

      </tr>
      {index.map((i)=>
       <tr>    
        <td>{i.value}</td>
        <td>{i.system}</td>
        <td>{i.users}</td>
        <td>{i.time}</td>

      </tr>
        )}
    </table>
        </>
    )
}