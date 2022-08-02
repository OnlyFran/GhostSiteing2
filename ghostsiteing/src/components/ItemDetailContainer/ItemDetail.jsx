import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputCount from '../Intercambiabilidad/InputCount';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
  const [ inputType, setInputType ] = useState('button');
  const handleInter = () => {
        setInputType('input')
    }

  const onAdd = (cant) => {
    console.log(`${cant} "${producto.nombre}" agregados`);
  }

  return (
    <div>
      <div className="col">
        <div className="card">
          <img src={producto.imagen} className="card-img-top carts-objetos" alt="producto" />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <p className="card-text">{producto.stock}</p>
          </div>
        </div>
      </div>

      <div className="col">
        {inputType == 'button'
        ?
        <ItemCount initial={1} stock={15} onAdd={onAdd} handleInter={handleInter} />
        :
        <InputCount />
        }
      </div>
    </div>
  );
}

export default ItemDetail