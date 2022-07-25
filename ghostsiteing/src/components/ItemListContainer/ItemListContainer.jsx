import { useEffect } from "react"
import { useState } from "react"
import { getFetch } from "../GetFetch/getFetch"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = () => {
    const [ productos, setProductos] = useState([])
    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        getFetch()
        .then(respuesta => setProductos(respuesta))
        .catch( err => console.log(err) )
        .finally( () => setLoading(false) );
    }, [])
    const onAdd = (cant) => { console.log(`Añadidos ${cant} productos al Carrito`);
    }

    console.log(productos);

    return (
        <div>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            <br />
            {loading ? <h3>Cargando..</h3> :
            productos?.map( producto => 
                <div key={producto.id} className="card" >
                    <img src={producto.imagen} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">{producto.descripcion}</p>
                        <a href="#" className="btn btn-primary">¡Lo quiero!</a>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default ItemListContainer