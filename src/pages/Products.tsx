import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestra Colección
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre productos de lujo cuidadosamente seleccionados
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
