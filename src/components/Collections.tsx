import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    // Jewelry Collection
    {
      id: 1,
      name: "Pearl Elegance Necklace",
      price: "PKR 8,500",
      originalPrice: "PKR 10,000",
      image: "/placeholder.svg",
      category: "jewelry",
      description: "Timeless pearl necklace with gold accents",
      featured: true,
      inStock: true
    },
    {
      id: 2,
      name: "Diamond Stud Earrings",
      price: "PKR 12,000",
      image: "/placeholder.svg",
      category: "jewelry",
      description: "Classic diamond studs in 18k gold",
      featured: false,
      inStock: true
    },
    {
      id: 3,
      name: "Rose Gold Bracelet",
      price: "PKR 6,500",
      image: "/placeholder.svg",
      category: "jewelry",
      description: "Delicate rose gold chain bracelet",
      featured: false,
      inStock: true
    },
    // Custom Gifts
    {
      id: 4,
      name: "Personalized Gift Box",
      price: "PKR 3,500",
      image: "/placeholder.svg",
      category: "gifts",
      description: "Customizable gift box with your choice of items",
      featured: true,
      inStock: true
    },
    {
      id: 5,
      name: "Engraved Photo Frame",
      price: "PKR 2,200",
      image: "/placeholder.svg",
      category: "gifts",
      description: "Beautiful wooden frame with custom engraving",
      featured: false,
      inStock: true
    },
    {
      id: 6,
      name: "Custom Jewelry Box",
      price: "PKR 4,800",
      image: "/placeholder.svg",
      category: "gifts",
      description: "Handcrafted jewelry box with personalization",
      featured: false,
      inStock: false
    },
    // Hair & Nail Accessories
    {
      id: 7,
      name: "Silk Hair Scrunchies Set",
      price: "PKR 1,200",
      image: "/placeholder.svg",
      category: "accessories",
      description: "Set of 3 luxury silk scrunchies",
      featured: false,
      inStock: true
    },
    {
      id: 8,
      name: "Crystal Hair Clips",
      price: "PKR 1,800",
      image: "/placeholder.svg",
      category: "accessories",
      description: "Sparkling crystal hair clips set",
      featured: true,
      inStock: true
    }
  ];

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    { id: "jewelry", name: "Jewelry", count: products.filter(p => p.category === "jewelry").length },
    { id: "gifts", name: "Custom Gifts", count: products.filter(p => p.category === "gifts").length },
    { id: "accessories", name: "Accessories", count: products.filter(p => p.category === "accessories").length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="collections" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gradient mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of jewelry, gifts, and accessories
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "luxury" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden shadow-luxury hover:shadow-glow transition-luxury">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-luxury"
                />
                {product.featured && (
                  <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
                {!product.inStock && (
                  <Badge variant="destructive" className="absolute top-2 left-2">
                    Out of Stock
                  </Badge>
                )}
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-luxury">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
                <CardDescription className="line-clamp-2">{product.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  variant="luxury" 
                  disabled={!product.inStock}
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Collections;