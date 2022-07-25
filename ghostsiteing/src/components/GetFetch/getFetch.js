let productos = [
      {id: 1, nombre: "Juego de la Copa", descripcion:"Un tablero, 4 opciones, una copa" , stock: 15, imagen:"imagen", precio: 3000},
      {id: 2, nombre: "Tablero Ouija", descripcion:"El famoso tablero Ouija, incluye un tablero y una plancheta" , stock: 15, imagen:"imagen", precio: 5000},
      {id: 3, nombre: "Atrapasueños", descripcion:"Colgalo en la ventana de tu pieza y dormí tranquilo" , stock: 15, imagen:"imagen", precio: 2500}
]
  
export const getFetch = () => {
    return new Promise( ( resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    })
}