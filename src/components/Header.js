import React,{useContext} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus,faShoppingCart} from '@fortawesome/fontawesome-free-solid'
import {Link} from "react-router-dom"
import { CartContext } from "../context"
function Header() {
    const {cartItems}=useContext(CartContext)

    return (
        
        <header>
             <h2><Link to="/">Pic Some</Link></h2>             
            <h2><Link to="/cart">
            {cartItems.length>0? <FontAwesomeIcon
              icon={faShoppingCart} />:<FontAwesomeIcon 
              icon={faCartPlus}/>

             }
            </Link></h2>
        </header>
    )
}

export default Header
