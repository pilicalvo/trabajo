import { Injectable } from '@angular/core';
import { ProductoCarrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { 
    const guardado = localStorage.getItem("carrito");
    if (guardado){
      this.carrito = JSON.parse(guardado);
      this.calcularTotal()
    }

  }

  carrito: ProductoCarrito[] = [];
  totalCarrito: number = 0;

  agregarAlCarrito(producto:Producto,cantidad:number){
    //Reviso si el producto existe en el carrito
    const index = this.carrito.findIndex(item => item.producto.nombre === producto.nombre);
    if(index === -1){
      const productoActual: ProductoCarrito = {
        cantidad: cantidad,
        producto: producto
      }
      this.carrito.push(productoActual);
    } else {
      this.carrito[index].cantidad = this.carrito[index].cantidad + cantidad;
    }

    console.log(this.carrito)
    this.guardarLocalStorage()
    this.calcularTotal()
  }

  eliminarProducto(nombre: string){
    this.carrito = this.carrito.filter (item => item.producto.nombre !== nombre);
    this.guardarLocalStorage()
    this.calcularTotal()

  }

  vaciarCarrito(){
    this.carrito=[];
    this.guardarLocalStorage()
    this.calcularTotal()

  }

  cambiarCantidad(){
    this.calcularTotal()
    this.guardarLocalStorage()
  }

  guardarLocalStorage(){
    localStorage.setItem("carrito",JSON.stringify(this.carrito))
  }
  
  calcularTotal(){

    let subtotal = 0; 
    this.carrito.forEach(item => {
    subtotal = subtotal + item.cantidad * item.producto.precio
    })
    this.totalCarrito = subtotal;
  }
}
