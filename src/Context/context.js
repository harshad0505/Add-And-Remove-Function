import { createContext, useState } from "react";
import img from '../Images/phone.png'
import ios from '../Images/ols.png'
import iphone from '../Images/old.png';



const photoContext=createContext(null);

function Provider({children}){
  
const [photo,setphoto]=useState([]);
const [width,setWidth]=useState(50);


const handelAddClick=()=>{
  
    const update=[...photo,{id:Math.floor(Math.random()*1000),
      
      setphoto(update);
      setWidth(width+40)
      
  }
  const handelDeleteClick=(e)=>{
    const $photo=[...photo];
    if(photo.length >0){
        
        const newPhoto=$photo.pop();
        setWidth(newPhoto.width)
        setphoto($photo);
    }
   
        
    }
       
   
    
   
  
    
    
  
  const valuetoshare={
    handelAddClick,photo,width,setWidth,handelDeleteClick
  }

    return <photoContext.Provider value={valuetoshare} >
        {children}
    </photoContext.Provider>
}

export default photoContext;
export {Provider};