import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function Effect() {
const [data ,setData]=React.useState([]) 

const navigate = useNavigate()
    React.useEffect(()=> {
      
axios.get("https://63e210c3109336b6cbfec2e9.mockapi.io/Login").then(res =>{
navigate("")

})
        
    },[])

  return (
    
    <div>Effect

<ul>

{data.map((item:any,id)=>


    <div key={item.id}>


    <li>     {item.firstName}</li>
    <li>     {item.lastName}</li>
    <li>     {item.Email}</li>
    <li>     {item.numebr}</li>

    </div>
    )
    
    
}

</ul>

    </div>
    
  )

}

export default Effect