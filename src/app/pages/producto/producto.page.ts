import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { Producto } from 'src/app/core/interfaces/producto';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
    public cartService: CartService
    ) { 
    activatedRoute.params.subscribe(params => {
      console.log(params)
      
      CATEGORIAS.forEach(categoria => {
        const productoEncontrado = categoria.productos.find(producto => producto.id == params['id']);
        if(productoEncontrado){
           this.producto = productoEncontrado
        }
      })
    })
  }

  cantidad = 1

  ngOnInit() {
  }

  producto: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    descripcion: '',
    imagen: ''
  }
}
