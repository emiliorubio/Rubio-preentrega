import React, { useContext } from 'react'
import { Datacontext } from "../../context/Dataprovider";
import { Link } from "react-router-dom";



export const Item = ({
    id,
    title,
    price,
    image,
    category,
    autor,

}) => {
    const value = useContext(Datacontext);
    const addCarrito = value.addCarrito;


    return (
        <div className='producto'>
            <Link to={`../Producto/${id}`}>
                <div className='producto__img'>
                <img src={image} alt={title} />
                </div>
            </Link>
            <div className='producto__footer'>
                    <h1>{title}</h1>
                    <h4>{autor}</h4>
                    <p>{category} </p>
                    <p className='price'>${price}</p>
            </div>
            <div className='buttom'>
                    <button className='btn' onClick={() => addCarrito(id)}>
                    Añadir al carrito
                    </button>
                    <div className='bottom'>
                    <Link to={`/producto/${id}`} className="btn">Detalle</Link>
                    </div>
            </div>
        </div>
    )
}
