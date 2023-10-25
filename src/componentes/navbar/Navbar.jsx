import React from "react";
import "./navbar.css"

const Navbar = () => {
    return(
        <nav>
           <h1 className="titulo"> FunkoLand</h1>
            <ul>
                <li> <a href="#">Inicio</a> </li>
                <li> <a href="#"> Originales</a> </li>
                <li> <a href="#"> Alternativos</a> </li>
            </ul> 
        </nav>
    )


}

export default Navbar;