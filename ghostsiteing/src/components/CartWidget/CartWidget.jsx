import logo from "../images/moneySkull.png"
import "../CartWidget/CartWidget.css"

const CartWidget = () => {
  return (
    <>
        <img id="Logo" src={logo} alt="" onClick={ () => { console.log("Acceso al Carrito") } } />
    </>
  )
}

export default CartWidget