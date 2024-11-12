export default function Tablerow(){
    const value = [
        {
           "name": "saranya",
           "place": "coimbatore" ,
           "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
           "price": 109.95,
           "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
           "category": "men's clothing",
        },
        {
            "name": "ansi",
           "place": "chennai" ,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        },
        {
            "name": "vinodha",
           "place": "selam" ,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        }
    ]
    return( 
        <>

<table>
      <tr>
        <th>name</th>
        <th>place</th>
        <th>title</th>
        <th>price</th>
        <th>description</th>

      </tr>
      {value.map((i)=>
       <tr>    
        <td>{i.Name}</td>
        <td>{i.place}</td>
        <td>{i.title}</td>
        <td>{i.price}</td>
        <td>{i.description}</td>

      </tr>
        )}
    </table>
</>
    )
}