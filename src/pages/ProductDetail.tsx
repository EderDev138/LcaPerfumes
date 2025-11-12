import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-warm flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Producto no encontrado</h1>
          <Link to="/">
            <Button variant="gold">Volver al inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-card shadow-gold">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">
                {product.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-primary mb-6">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-5 w-5 text-primary" />
                <span>Envío gratis en compras superiores a $500</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-5 w-5 text-primary" />
                <span>Garantía de 2 años</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-5 w-5 text-primary" />
                <span>Devoluciones gratuitas en 30 días</span>
              </div>
            </div>

            <div className="pt-6">
              <Button
                onClick={() => addToCart(product)}
                variant="gold"
                size="lg"
                className="w-full md:w-auto px-12"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Agregar al Carrito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
