import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Post() {
    const [firstName , setFirstName] = React.useState("")
    const [lastName , setLastName] = React.useState("")
    const [Email , setEmail] = React.useState("")
    const [numebr , setNumber] = React.useState <any>()
    const [data ,setData]=React.useState<any []>([]) 

const api = "https://63e210c3109336b6cbfec2e9.mockapi.io/Login"
React.useEffect(()=>{

    axios.get(api).then(res=>{
        setData(res.data)
    }

    )
})

const PostD = ()=>{
    if(firstName.length >=3 &&lastName.length>=3  && Email.length>=3 &&numebr.length>=3 ){
        axios.post(api,{
            firstName,
            lastName,
            Email,
            numebr
        }).then(res=>{
            console.log(res.data);
           
            
        })
      
        axios.get("https://63e210c3109336b6cbfec2e9.mockapi.io/Login")
    }else{
        alert("Please write correct information")
    }

}


const Deleteitem=(id:string) =>{

axios.delete(`https://63e210c3109336b6cbfec2e9.mockapi.io/Login/${id}`).then(res=>{
    setData(data.filter((del)=>{
        return del.id !=id
    }
    ))
})
};

  return (
    <>
    <div>
        <input placeholder=' الاسم' onChange={e =>{setFirstName(e.target.value)}}></input>
        <br></br>
        <input placeholder=' اسم العائله' onChange={e =>{setLastName(e.target.value)}}></input>
        <br></br>
        <input placeholder='  الايميل' onChange={e =>{setEmail(e.target.value)}}></input>
        <br></br>
        <input placeholder=' رقم التواصل' onChange={e =>{setNumber(e.target.value)}}></input>
        <br></br>
        <button onClick={PostD} >تسجيل البيانات</button>
        
    </div>



    <ul>

{data.map((item:any)=>


    <div key={item.id}>


    <li>  الاسم  : {item.firstName}</li>
    <li>   اللقب : {item.lastName}</li>
    <li>   الايميل : {item.Email}</li>
    <li>   رقم:  {item.numebr}</li>
    <button onClick={()=> {Deleteitem(item.id)}}>حذف</button>
    </div>

    
    )
    
    
}

</ul>


    </>


  )
  
}

export default Post