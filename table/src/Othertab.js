export default function(){
    const Tab = [
        {
            "method": "get",
            "path": "/hello-world",
            "status": 200,
            "content": "Hello bar!",
            "content_type": "text/plain"
            },
            {
            "method": "start",
            "path": "/bye-world",
            "status": 300,
            "content": "bye bar!",
            "content_type": "index/plain"
            },
            {
            "method": "end",
            "path": "done-world",
            "status": 800,
            "content": "done bar!",
            "content_type": "text/plain"
            },
            {
            "method": "computer",
            "path": "mobile-world",
            "status": 500,
            "content": "mobile bar!",
            "content_type": "none/plain"
            }
    ]
    return (
        <>
<table>
      <tr>
        <th>method</th>
        <th>path</th>
        <th>status</th>
        <th>content</th>
        <th>content_type</th>

      </tr>
      {Tab.map((i)=>
       <tr>    
        <td>{i.method}</td>
        <td>{i.path}</td>
        <td>{i.status}</td>
        <td>{i.content}</td>
        <td>{i.content_type}</td>

      </tr>
        )}
    </table>
        </>
    )
}