import React,{useContext, useState} from "react";
import { CartContext } from "../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart,faPlusCircle,faHeartbeat} from '@fortawesome/fontawesome-free-solid'
function Image({className,img}){
    const {toggleIsFavorite}=useContext(CartContext)
    const [hovered,setHovered]=useState(false)
    function heartIcon(){
        if(img.isFavorite){
            return <FontAwesomeIcon icon={faHeart} onClick={()=>toggleIsFavorite(img.id)} className="favorite"/>
        }
        else if(hovered){
            return <FontAwesomeIcon icon={faHeartbeat} onClick={()=>toggleIsFavorite(img.id) } className="favorite"/>
        }
    }
    const cartIcon=hovered &&<FontAwesomeIcon icon={faPlusCircle} className="cart"/>
    return (
        <div
         className={`${className} image-container`}
         onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         >
            <img src={img.url} className="image-grid" alt=""/>
            {heartIcon() }
            {cartIcon}
            
        </div>
    ) 
}
export default Image