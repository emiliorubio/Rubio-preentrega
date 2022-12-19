import React, {useContext} from 'react'
import { Datacontext } from '../../context/Dataprovider';
import { ProductoItem } from "./ProductoItem";

export const ProductosLista = () => {

    const value = useContext(Datacontext)
    const [productos] = value.productos

    return (
        <>
        <h1 className='title'>Libros</h1>
        <div className='productos'>
            {
                productos.map(producto =>(
                    <ProductoItem
                        key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        price={producto.price}
                        image={producto.image}
                        category={producto.category}
                        cantidad={producto.cantidad}
                    />
                ))
            }
        </div>
        </>
    );
};
