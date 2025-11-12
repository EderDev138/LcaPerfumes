import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-gold"></div>
            <span className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              Rincon Perfumes
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link to="/products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Perfumes
          </Link>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Fragancias
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Nosotros
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onCartClick}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground">
                {totalItems}
              </Badge>
            )}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
