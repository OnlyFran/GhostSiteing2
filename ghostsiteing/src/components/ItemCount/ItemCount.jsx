import { useState } from "react"
import "../ItemCount/ItemCount.css"

const ItemCount = ({ initial = 1 , stock = 10 , onAdd}) => {
    const [count, setCount] = useState(initial)

    const handleAumento = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }
    
    const handleDescuento = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }
    
    const handleAñadirAlCarrito = () => { onAdd(count) }

    return (
        <div id="itemCountDiv">
            <button className="btn-masMenos btn btn-outline-primary" onClick={handleDescuento}>-</button>
            <label> {count} </label>
            <button className="btn-masMenos btn btn-outline-primary" onClick={handleAumento}>+</button>
            <br />
            <button className="btn-añadirCarrito btn btn-outline-success" onClick={handleAñadirAlCarrito}>Add to Cart</button>
        </div>
    )
}

export default ItemCount