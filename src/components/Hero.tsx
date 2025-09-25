import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import jewelryHero from "@/assets/jewelry-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={jewelryHero}
          alt="Elegant jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-medium tracking-wide">LAUNCHED IN 2025</span>
            <Sparkles className="h-6 w-6 text-accent ml-2" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Treasures by SK
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-4 opacity-90">
            Elegant Jewelry & Customized Gifts
          </p>
          
          <p className="text-lg sm:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            Founded by Sehrish Khurram in Pakistan. Discover timeless elegance through our exquisite jewelry collection and meaningful customized gifts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Explore Collection
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="elegant" size="xl">
              Custom Orders
            </Button>
          </div>

          <div className="mt-12 flex justify-center items-center space-x-8 text-sm opacity-75">
            <div className="text-center">
              <div className="font-semibold">✨ Jewelry</div>
              <div>Collection</div>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="font-semibold">🎁 Custom</div>
              <div>Gifts</div>
            </div>
            <div className="h-8 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="font-semibold">🔥 Trending</div>
              <div>Items</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;