import { Product } from "@/context/CartContext";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";
import perfume5 from "@/assets/perfume-5.jpg";
import perfume6 from "@/assets/perfume-6.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Oud Imperial",
    price: 289.99,
    image: perfume1,
    description: "Fragancia masculina intensa con notas de oud, ámbar y especias orientales. Eau de Parfum 100ml.",
    category: "Hombre",
  },
  {
    id: 2,
    name: "Rose Élégance",
    price: 249.99,
    image: perfume2,
    description: "Perfume femenino floral con rosa búlgara, jazmín y toques de vainilla. Eau de Parfum 100ml.",
    category: "Mujer",
  },
  {
    id: 3,
    name: "Prestige Noir",
    price: 329.99,
    image: perfume3,
    description: "Fragancia unisex sofisticada con bergamota, vetiver y almizcle blanco. Eau de Parfum 100ml.",
    category: "Unisex",
  },
  {
    id: 4,
    name: "Ambre Oriental",
    price: 279.99,
    image: perfume4,
    description: "Perfume oriental con ámbar, sándalo, vainilla y especias exóticas. Eau de Parfum 100ml.",
    category: "Mujer",
  },
  {
    id: 5,
    name: "Citrus Fresh",
    price: 199.99,
    image: perfume5,
    description: "Fragancia fresca cítrica con limón, bergamota y notas verdes. Eau de Toilette 100ml.",
    category: "Hombre",
  },
  {
    id: 6,
    name: "Luxe Couture",
    price: 389.99,
    image: perfume6,
    description: "Perfume exclusivo de alta costura con iris, pachulí y notas amaderadas. Eau de Parfum 100ml.",
    category: "Unisex",
  },
];
