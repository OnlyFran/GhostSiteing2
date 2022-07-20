import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = () => {
    const onAdd = (cant) => { console.log(`Añadidos ${cant} productos al Carrito`); }
    return (
        <div>
        <div>ItemListContainer</div>
        <br />
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer