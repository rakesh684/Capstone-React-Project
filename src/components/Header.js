import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/fontawesome-free-solid'
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
             <h2><Link to="/">Pic Some</Link></h2>
            <h2><Link to="/cart"><FontAwesomeIcon icon={faCartPlus} /></Link></h2>
        </header>
    )
}

export default Header
