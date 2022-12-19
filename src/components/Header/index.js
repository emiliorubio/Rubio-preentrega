import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Datacontext } from "../../context/Dataprovider";



export const Header = () => {
    const value = useContext(Datacontext);
    const [menu, setMenu] = value.menu
    const [carrito] = value.carrito

    const toogleMenu = () =>{
        setMenu(!menu)
    }



    return (
        <header>
        
        <Link to='/'>
            <div className='logo'>
                <span>A | P</span>
            </div>
        </Link>
        <ul>
            <li>
                <Link to='/'>INICIO</Link>
            </li>
            <li>
                <Link to='productos'>PRODUCTOS</Link>
            </li>
        </ul>
        <div className="cart" onClick={toogleMenu}>
        <box-icon name='cart' flip='horizontal' animation='tada' color='#f7f9f2' ></box-icon>
            <span className='item__total'>{carrito.length}</span>
        </div>
        </header>
    )
}
