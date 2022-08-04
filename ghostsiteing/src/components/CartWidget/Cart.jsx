import React from 'react'
import { useCartContext } from '../../context/CartContext'

const Cart = () => {

  const { cartList, vaciarCarrito } = useCartContext()
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
                  <p className="card-text">{item.cantidad}</p>
                </div>
              </div>
            </div>
          </li> 
        ))}
      </ul>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart