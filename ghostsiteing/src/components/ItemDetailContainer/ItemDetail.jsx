import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = () => {
  const onAdd = (cant) => {
    console.log(`${cant} items agregados`);
  }
  return (
    <div>
      Item Detail
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail