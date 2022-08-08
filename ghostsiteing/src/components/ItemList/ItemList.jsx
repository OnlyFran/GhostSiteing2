import React, { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo(
  
  ( {productos} ) => {

    return (
      <div>
          { productos?.map ( prod => <Item key={prod.id} prod={prod} /> ) }
      </div>
    );
  } 
) 

export default ItemList