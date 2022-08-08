import React from 'react'
import { useCartContext } from '../../context/CartContext'
import VolverAlMenu from '../button/VolverAlMenu'

const Cart = () => {

  const { cartList, vaciarCarrito, precioTotal, removeFromCart } = useCartContext()
  return (
    <div>
      <ul>
        {cartList.map(item => (
          <li key={item.id}>
            <div className="col">
              <div className="card">
                <img src={item.imagen} className="card-img-top carts-objetos" alt="producto" />
                <div className="card-body">
                  <h5 className="card-title">{item.nombre}</h5>
                  <p className="card-text">{item.descripcion}</p>
                  <p className="card-text">Cantidad seleccionada: {item.cantidad}</p>
                  <p className='card-text'>Precio por unidad: ${item.precio}</p>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-outline-danger">X</button>
                </div>
              </div>
            </div>
          </li> 
        ))}
      </ul>
      <p>{precioTotal() !== 0 && `Precio final: $${precioTotal()}`}</p>
      {cartList != ""
      ?
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      :
      <>
      <p>No hay nada por aquí..</p>
      <VolverAlMenu />
      </>
      }
    </div>
  )
}

export default Cart