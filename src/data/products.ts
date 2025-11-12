import { Product } from "@/context/CartContext";
import watch1 from "@/assets/watch-1.jpg";
import bag1 from "@/assets/bag-1.jpg";
import sunglasses1 from "@/assets/sunglasses-1.jpg";
import perfume1 from "@/assets/perfume-1.jpg";
import jewelry1 from "@/assets/jewelry-1.jpg";
import wallet1 from "@/assets/wallet-1.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Reloj Elegante de Oro",
    price: 799.99,
    image: watch1,
    description: "Reloj de lujo con detalles en oro de 18k y movimiento suizo de alta precisión.",
    category: "Relojes",
  },
  {
    id: 2,
    name: "Bolso de Cuero Premium",
    price: 599.99,
    image: bag1,
    description: "Bolso artesanal de cuero genuino con herrajes dorados y diseño atemporal.",
    category: "Bolsos",
  },
  {
    id: 3,
    name: "Gafas de Sol de Diseñador",
    price: 349.99,
    image: sunglasses1,
    description: "Gafas de sol con montura dorada y lentes polarizados UV400.",
    category: "Accesorios",
  },
  {
    id: 4,
    name: "Perfume Eau de Parfum",
    price: 189.99,
    image: perfume1,
    description: "Fragancia de lujo con notas doradas y frascos con detalles en oro.",
    category: "Fragancias",
  },
  {
    id: 5,
    name: "Collar de Joyería Fina",
    price: 1299.99,
    image: jewelry1,
    description: "Collar elegante con piedras preciosas y cadena de oro de 14k.",
    category: "Joyería",
  },
  {
    id: 6,
    name: "Cartera de Piel Exclusiva",
    price: 249.99,
    image: wallet1,
    description: "Cartera de piel premium con compartimentos múltiples y detalles dorados.",
    category: "Accesorios",
  },
];
