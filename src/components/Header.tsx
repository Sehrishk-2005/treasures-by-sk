import { useState } from "react";
import { Menu, X, Search, ShoppingBag, Heart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import treasuresLogo from "@/assets/treasures-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home", action: () => window.location.hash = "home" },
    { name: "Collections", href: "#collections", action: () => window.location.hash = "collections" },
    { name: "Custom Box", href: "#custom-box", action: () => window.location.hash = "custom-box" },
    { name: "About", href: "#about", action: () => window.location.hash = "about" },
    { name: "Gallery", href: "#gallery", action: () => window.location.hash = "gallery" },
    { name: "Contact", href: "#contact", action: () => window.location.hash = "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-luxury">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Brand */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src={treasuresLogo} 
              alt="Treasures by SK" 
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover shadow-md"
            />
            <div className="hidden xs:block">
              <h1 className="text-sm sm:text-lg font-serif font-bold text-primary">Treasures by SK</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Elegant Jewelry & Gifts</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="text-foreground hover:text-primary transition-luxury font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" title="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" title="Wishlist">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" title="Cart">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button 
              variant="luxury" 
              size="sm" 
              onClick={() => window.location.hash = "custom-box"}
              className="ml-2"
            >
              <Package className="h-4 w-4 mr-2" />
              Custom Box
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    item.action();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-luxury"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="luxury" 
                  size="sm" 
                  onClick={() => {
                    window.location.hash = "custom-box";
                    setIsMenuOpen(false);
                  }}
                  className="w-full"
                >
                  <Package className="h-4 w-4 mr-2" />
                  Create Custom Box
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;