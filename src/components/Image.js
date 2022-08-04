import React,{useContext, useState} from "react";
import PropTypes from 'prop-types'
import { CartContext } from "../context";
// import useHover from "../hooks/useHover";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart,faPlusCircle,faHeartbeat,faShoppingCart} from '@fortawesome/fontawesome-free-solid'

function Image({className,img}){
   
    const {toggleIsFavorite,addCartItems,cartItems,removeFromCart}=useContext(CartContext)
    const [hovered,setHovered]=useState(false)
    
    function heartIcon(){
        if(img.isFavorite){
            return <FontAwesomeIcon icon={faHeart} 
            onClick={()=>toggleIsFavorite(img.id)} 
            className="favorite"/>
        }
        else if(hovered){
            return <FontAwesomeIcon icon={faHeartbeat} 
            onClick={()=>toggleIsFavorite(img.id) } 
            className="favorite"/>
        }
    }
    
    function cartIcon(){
        const alreadyInCart=cartItems.some(item=>
            item.id===img.id)
        if(alreadyInCart){
          return <FontAwesomeIcon icon={faShoppingCart}
          onClick={()=>removeFromCart(img.id)} className="cart"/>
        }
        else if(hovered){
           return <FontAwesomeIcon icon={faPlusCircle} 
            onClick={()=>addCartItems(img)} className="cart"/>
        }
       
    }
    
    return (
        <div
         className={`${className} image-container`}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
         >
            <img src={img.url} className="image-grid" alt=""/>
            {heartIcon() }
            {cartIcon()}
            
        </div>
    ) 
}

Image.propTypes={
    className:PropTypes.string,
    img:PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite:PropTypes.bool
    })

}
export default Image