import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
      nombre: "Entradas",
      id: 1,
      fotoUrl: "https://i0.wp.com/sabordelobueno.com/wp-content/uploads/2019/12/rollitos-zapallito.jpg?fit=1024%2C683&ssl=1",
      productos: [
    {
        id: 1,
        nombre: "Rabas",
        precio: 3000,
        descripcion:  "Nuestros famosos aros de calamar rebozados, acompañados de nuestra tradicional salsa pisco.",
        imagen: "https://acdn.mitiendanube.com/stores/480/355/products/rabas1-29ad3504026eaee61315119480411735-640-0.jpg"
    },
    {
      id: 2,
      nombre: "Aros de cebolla",
      precio: 2500,
      descripcion:  "Aros de cebolla rebozados y crujientes, acompañados de nuesta salsa pisco.",
      imagen: "https://recetacubana.com/wp-content/uploads/2019/08/aros-de-cebolla.webp"
    },
    {
      id: 3,
      nombre: "Papas con cheddar",
      precio: 2800,
      descripcion:  "Papas bastón gratinadas con queso cheddar, cebolla de verdeo y panceta.",
      imagen: "https://images.hola.com/imagenes/cocina/recetas/20220420208374/patatas-frita-queso-cheddar/1-77-159/patatas-queso-adob-t.jpg"
    },
    {
      id: 4,
      nombre: "Bastones de muzzarella",
      precio: 3300,
      descripcion:  "Bastones de queso muzzarella rebozados, acompañados de nuestra salsa pisco.",
      imagen: "https://www.clarin.com/img/2020/07/21/EVsX1RphU_1256x620__2.jpg"
    }]
    },
    
    {
      nombre: "Plato Principal",
      id: 2,
      fotoUrl: "https://cdn7.kiwilimon.com/clasificacion/3675/3675.jpg",
      productos: [{

        id: 5,
        nombre: "Ensalada Ceasar",
        precio: 4500,
        descripcion:  "La tradicional Caesar's Salad acompañada de trozos de pollo grillados a la leña.",
        imagen: "https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web-553x458.jpg"
      },
      {
        id: 6,
        nombre: "Mac & Cheese",
        precio: 4700,
        descripcion:  "Clásica pasta con crema de queso cheddar, trocitos de pollo grillado y queso parmesano.",
        imagen: "https://web-app-prod-01.nyc3.cdn.digitaloceanspaces.com/ryf_media/products/ee6f6e1e30270e23644648b8c98e86d1.jpeg"
      },
      {
        id: 7,
        nombre: "Hamburguesa Clásica",
        precio: 4500,
        descripcion:  "Nuestra famosa hamburguesa casera con lechuga, tomate, cebolla caramelizada, panceta crocante, queso cheddar y huevo frito, acompañada de papas bastón.",
        imagen: "https://previews.123rf.com/images/jackmalipan/jackmalipan1705/jackmalipan170500032/77679905-hamburguesa-de-carne-con-papas-fritas-y-salsa-de-carne-de-aguacate-conjunto-de-comida.jpg"
      },
      {
        id: 8,
        nombre: "BBQ Ribs",
        precio: 5100,
        descripcion:  "Costillar de cerdo ahumado, asado lentamente con salsa barbacoa, acompañado de papas fritas, y coleslaw.",
        imagen: "https://assets.unileversolutions.com/recipes-v2/216821.jpg"
      }]
    },

    {
      nombre: "Postres",
      id: 3,
      fotoUrl: "https://cdn.bolivia.com/gastronomia/2014/03/17/postre-de-brownie-y-helado-3443.jpg",
      productos: [
        {
          id: 9,
          nombre: "Brownie de chocolate con Helado",
          precio: 2900,
          descripcion:  "Brownie tibio acompañado con helado de crema americana y salsa de chocolate.",
          imagen: "https://es.rc-cdn.community.thermomix.com/recipeimage/mefmdfat-fed33-856901-cfcd2-zjmzyp14/e9bc33a4-b95f-4cf3-b6a2-3730c1881abf/main/brownie-de-chocolate-con-helado-de-vanilla.jpg"
        },
        {
          id: 10,
          nombre: "Oreo Torta",
          precio: 3100,
          descripcion:  "La famosa torta de galletitas oreo y crema de dulce de leche, cubierta con ganache de chocolate blanco.",
          imagen: "https://www.paulinacocina.net/wp-content/uploads/2022/06/receta-de-torta-oreo.jpg"
        },
        {
          id: 11,
          nombre: "Ensalada de Frutas",
          precio: 2800,
          descripcion:  "Selección de frescas y variadas frutas de estación maceradas en su mismo jugo.",
          imagen: "https://www.alqueria.com.co/sites/default/files/2021-12/CH_Fotos_Ensalada-de-frutas_1400x700.jpg"
        },
        {
          id: 12,
          nombre: "Flan",
          precio: 2600,
          descripcion:  "Flan casero acompañado con crema y dulche de leche.",
          imagen: "https://www.abc.com.py/resizer/u18YmEDglzLgtqMCK926qVitSUg=/fit-in/770x495/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/abccolor/VOFATWAWVZGMDNGCZKWNBCBUHE.jpg"
        }]
    },
    {
      nombre: "Bebidas",
      id: 4,
      fotoUrl: "https://blog.supermercadosmas.com/wp-content/uploads/2021/06/Bebidas-refrescantes-Eurocopa.jpg",
      productos: [
        {
          id: 13,
          nombre: "Gaseosas",
          precio: 800,
          descripcion:  "Trabajamos con la línea Coca Cola.",
          imagen: "https://www.mapfre.com.pe/media/la-oms-recomienda-no-consumir-bebidas-gaseosas-800x528-1-1.jpg"
        },
        {
          id: 14,
          nombre: "Limonada",
          precio: 700,
          descripcion:  "Fresca limonada de jengibre.",
          imagen: "https://cdn.create.vista.com/api/media/small/372289834/stock-photo-fresh-ginger-lemonade-glass-lemon"
        },
        {
          id: 15,
          nombre: "Agua",
          precio: 700,
          descripcion:  "Agua con o sin gas.",
          imagen: "https://www.fcarreras.org/images/1210850/representative_blog_image_factory.png"
        },
        {
          id: 16,
          nombre: "Copa de vino",
          precio: 850,
          descripcion:  "Consultar carta de vinos.",
          imagen: "https://images.hola.com/imagenes/cocina/escuela/200907079224/temperatura/vinos/enologia/0-876-296/temperatura-adobe-t.jpg?tx=w_680"
        }]
    }

   ]