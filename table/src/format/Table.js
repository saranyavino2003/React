export default function Table(){
    const people = [
        {
            "rate": 3.9,
            "count": 120,
             "creationAt": "2024-10-13T21:57:58.000Z",
    "updatedAt": "2024-10-14T01:49:27.000Z"
      
        },
        {
            "rate": 3.9,
            "count": 120,
            "creationAt": "2024-10-13T21:57:58.000Z",
            "updatedAt": "2024-10-13T21:57:58.000Z"
        

        },
        {
            "rate": 3.9,
            "count": 120,
            "creationAt": "2024-10-13T21:57:58.000Z",
    "updatedAt": "2024-10-13T21:57:58.000Z"

        },
        {
            "rate": 3.9,
            "count": 120,
            "creationAt": "2024-10-13T21:57:58.000Z",
            "updatedAt": "2024-10-14T06:36:58.000Z"
        
        }
    ]
    return(
        <>
<table>
      <tr>
        <th>rate</th>
        <th>count</th>
        <th>creationAt</th>
        <th>updatedAt</th>

      </tr>
      {people.map((i)=>
       <tr>    
        <td>{i.rate}</td>
        <td>{i.count}</td>
        <td>{i.creationAt}</td>
        <td>{i.updatedAt}</td>

      </tr>
        )}
    </table>
        </>
    )
}