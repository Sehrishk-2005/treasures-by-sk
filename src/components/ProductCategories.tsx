import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Gift, TrendingUp } from "lucide-react";
import jewelryHero from "@/assets/jewelry-hero.jpg";
import giftsHero from "@/assets/gifts-hero.jpg";
import hairAccessories from "@/assets/hair-accessories.jpg";

const ProductCategories = () => {
  const categories = [
    {
      title: "Jewelry Collection",
      subtitle: "Timeless Elegance",
      description: "Exquisite pieces crafted with precision and passion. From delicate necklaces to statement earrings.",
      image: jewelryHero,
      icon: Sparkles,
      featured: true
    },
    {
      title: "Customized Gifts",
      subtitle: "Personal Touch",
      description: "Thoughtfully curated gift baskets and personalized items that create lasting memories.",
      image: giftsHero,
      icon: Gift,
      featured: false
    },
    {
      title: "Hair & Nail Accessories",
      subtitle: "Trending Style",
      description: "Stay fashionable with our collection of trendy hair clips, scrunchies, and nail accessories.",
      image: hairAccessories,
      icon: TrendingUp,
      featured: false
    }
  ];

  return (
    <section id="shop" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gradient mb-4">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of jewelry, gifts, and accessories designed to make every moment special.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Category - Takes up more space */}
          <div className={`${categories[0].featured ? 'lg:row-span-2' : ''}`}>
            <div className="group relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-glow transition-luxury bg-gradient-card">
              <div className="aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
                <img 
                  src={categories[0].image}
                  alt={categories[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-luxury"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center mb-3">
                  <Sparkles className="h-6 w-6 text-accent mr-2" />
                  <span className="text-accent font-medium">{categories[0].subtitle}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-3">
                  {categories[0].title}
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {categories[0].description}
                </p>
                <Button variant="hero" className="group">
                  Shop Now
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Other Categories */}
          <div className="space-y-8">
            {categories.slice(1).map((category, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-glow transition-luxury bg-gradient-card">
                <div className="flex flex-col sm:flex-row">
                  <div className="aspect-[4/3] sm:aspect-square sm:w-1/2 overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-luxury"
                    />
                  </div>
                  
                  <div className="p-8 sm:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center mb-3">
                      {category.icon === Gift ? (
                        <Gift className="h-5 w-5 text-primary mr-2" />
                      ) : (
                        <TrendingUp className="h-5 w-5 text-primary mr-2" />
                      )}
                      <span className="text-primary font-medium text-sm">{category.subtitle}</span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-serif font-bold mb-3 text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <Button variant="luxury" size="sm" className="self-start group">
                      Explore
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white shadow-luxury">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              We specialize in custom orders and personalized gifts. Let us create something unique just for you.
            </p>
            <Button variant="elegant" size="lg">
              Request Custom Order
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
