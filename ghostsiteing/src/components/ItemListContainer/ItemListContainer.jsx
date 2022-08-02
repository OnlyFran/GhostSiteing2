import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getFetch } from "../GetFetch/getFetch"
import ItemList from "../ItemList/ItemList"
import '../ItemListContainer/cartsImage.css'

const ItemListContainer = () => {
    const [ productos, setProductos] = useState([]);
    const [ loading, setLoading ] = useState(true);
    
    const { categoriaId } = useParams ();

    useEffect(() => {
        if(categoriaId){
            getFetch()
            .then(respuesta => setProductos(respuesta.filter(prod => prod.categoria === categoriaId )))
            .catch( err => console.log(err) )
            .finally( () => setLoading(false) );
        } else {
            getFetch()
            .then(respuesta => setProductos(respuesta))
            .catch( err => console.log(err) )
            .finally( () => setLoading(false) );
        }
    }, [categoriaId])

    return (
        <div>
            <br />
            {loading ? 
                <h3>Cargando..</h3>
                :
                <ItemList productos = {productos} />
            }
        </div>
    );
}

export default ItemListContainer