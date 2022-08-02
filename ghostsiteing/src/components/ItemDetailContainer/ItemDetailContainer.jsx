import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Intercambiabilidad from '../../Intercambiabilidad/Intercambiabilidad.jsx'
import { getFetch } from "../GetFetch/getFetch.js"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const {detalleId} = useParams();
  
  useEffect(() => {
    getFetch(detalleId)
    .then(resp => setProducto(resp))
  }, []);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer