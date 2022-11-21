/*
Tienes que crear un script que gestione una lista de la compra.
 Para ello tienes dos listas de artículos: compra, pendiente.
  Cada elemento de la lista compra es un objeto con dos propiedades: 
  nombre del artículo y estado. Estado es un booleano true si el
  artículo se compró, false en caso contrario. Pendiente es una
   lista con los nombres de los artículos que faltan por comprar. 
   La función que debes crear recibe como argumento la lista de compra
    y devuelve la lista de pendientes.*/


const compra=[
    {nombre:"Pera",estado:"Pendiente"},{nombre:"Albaricoque",estado:"Comprado",},{nombre:"Macarrones",estado:"Pendiente"}
]

const pendiente = compra.filter((el)=>el.estado==="Pendiente");

console.log(pendiente);