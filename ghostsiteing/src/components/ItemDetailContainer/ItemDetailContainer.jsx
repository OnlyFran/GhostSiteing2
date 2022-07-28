import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../GetFetch/getFetch'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const {id} = useParams() // <- obj {detalleId : ''}

  useEffect( () => {
    getFetch(id)
    .then( respuesta => console.log(respuesta) )
  }, [])

  console.log(id);

  // getFetch(detalleId)  // pista del profe

  return (
    <div>
      ItemDetailContainer
      <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer