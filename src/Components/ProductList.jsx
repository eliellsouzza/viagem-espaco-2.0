import terra from "../../public/planets/terra.png"
import lua from "../../public/planets/lua.png"
import jupiter from "../../public/planets/jupiter.png"
import marte from "../../public/planets/marte.png"
import netuno from "../../public/planets/netuno.png"
import sol from "../../public/planets/sol.png"
import venus from "../../public/planets/venus.png"
import saturno from "../../public/planets/saturno.png"
 
const ProductList = [{
    id: 1,
    name: "TERRA",
    price: 3500000,
    imageUrl: terra ,
    distance: "149.600.000 km"
    
  },
    {
    id: 2,
    name: "LUA",
    price: 4750000,
      imageUrl: lua,
      distance: "385.000 km"
       
  },
  {
    id: 3,
    name: "NETUNO",
    price: 7500000,
    imageUrl: netuno
  }
  ,
  {
    id: 4,
    name: "VENUS",
    price: 8000000,
    imageUrl: venus
  }
  ,
  {
    id: 5,
    name: "JÚPITER",
    price: 6550000,
    imageUrl: jupiter
  }
  ,
  {
    id: 6,
    name: "SOL",
    price: 14750000,
    imageUrl: sol,
    distance: "149.600.000 km"
  }
  ,
  {
    id: 7,
    name: "MARTE",
    price: 9850000,
    imageUrl: marte
  }
  ,
  {
    id: 8,
    name: "SATURNO",
    price: 8532000,
    imageUrl: saturno
  }  
]
 
let soma = 0

export default ProductList