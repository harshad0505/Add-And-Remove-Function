import { useContext } from "react";
import photoContext from "../Context/context";
import PhotoShow from "./PhotoShow";

export default function PhotoLIst(props) {
   const {photo}= useContext(photoContext);
   console.log(photo)
//    useEffect(()=>{
//     setWidth(width-1)
//    },[photo])
const renderPhoto=photo.map((photos)=>{
    return <PhotoShow photos={photos} key={photos.id}/>
})

return (
<div className="render">
{  renderPhoto
}
</div>

);
  
 
}
