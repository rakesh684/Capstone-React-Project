import React,{useContext,useState} from "react";
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash,faTrashAlt} from '@fortawesome/fontawesome-free-solid'
import { CartContext } from "../context";
function CartItem({item}){
    const [hovered,setHovered]=useState(false)
    const {removeFromCart}=useContext(CartContext)
    return(
        <div className="cart-item">
           {hovered?
            <FontAwesomeIcon icon={faTrash} 
               onClick={()=>removeFromCart(item.id)}
               onMouseEnter={()=>setHovered(true)}
               onMouseLeave={()=>setHovered(false)}
            />:
            <FontAwesomeIcon icon={faTrashAlt} 
               onClick={()=>removeFromCart(item.id)}
               onMouseEnter={()=>setHovered(true)}
               onMouseLeave={()=>setHovered(false)}
            />
            }


            <img src={item.url} alt=" " width="130px"/>
            <p>$5.99</p>
        </div>

    )
}
CartItem.propTypes={
    item:PropTypes.shape({
        url:PropTypes.string.isRequired
    })
}
export default CartItem