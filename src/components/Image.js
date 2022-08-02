import React,{useContext, useState} from "react";
import { CartContext } from "../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart,faPlusCircle} from '@fortawesome/fontawesome-free-solid'
function Image({className,img}){
    const {toggleIsFavourite}=useContext(CartContext)
    const [hovered,setHovered]=useState(false)
    const heartIcon=hovered &&<FontAwesomeIcon icon={faHeart} onClick={toggleIsFavourite} className="favorite"/>
    const cartIcon=hovered &&<FontAwesomeIcon icon={faPlusCircle} className="cart"/>
    return (
        <div
         className={`${className} image-container`}
         onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         >
            <img src={img.url} className="image-grid" alt=""/>
            {heartIcon}
            {cartIcon}
            
        </div>
    ) 
}
export default Image