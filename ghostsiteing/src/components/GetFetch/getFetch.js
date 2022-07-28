import tarot from "../images/tarot.jpg"
import ouija from "../images/ouija.jpeg"
import atrapasueños from "../images/atrapasueños.jpg"
import juegoCopa from "../images/juegoCopa.jpeg"

let productos = [
    {id: 1, categoria:'juegos', nombre: "Juego de la Copa", descripcion:"Basado en la Ouija, abecedario en formato de tarjetas y una copa" , stock: 15, imagen:juegoCopa, precio: 1200},
    {id: 2, categoria: 'juegos', nombre: "Tablero Ouija", descripcion:"El famoso tablero Ouija, incluye un tablero y una plancheta" , stock: 15, imagen:ouija, precio: 5000},
    {id: 3, categoria: 'tienda', nombre: "Atrapasueños", descripcion:"Colgalo en la ventana de tu pieza y dormí tranquilo" , stock: 15, imagen:atrapasueños, precio: 2500},
    {id: 4, categoria: 'tienda', nombre: "Mazo del Tarot", descripcion:"Un mazo de cartas para leer la fortuna" , stock: 15, imagen:tarot, precio: 3700},
];

export const getFetch = (id) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            if(id){
                resolve(productos.find( producto => producto.id === id ));
            } else {
                resolve(productos);
            }
        }, 1500)
    })
}