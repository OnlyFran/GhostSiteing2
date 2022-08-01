import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
  const onAdd = (cant) => {
    console.log(`${cant} items agregados`);
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
        <ItemCount />
      </div>
    </div>
  );
}

export default ItemDetail