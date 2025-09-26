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
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => window.location.hash = "collections"}
            >
              Explore Collection
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="elegant" 
              size="xl"
              onClick={() => window.location.hash = "custom-box"}
            >
              Custom Orders
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-xs sm:text-sm opacity-75">
            <div className="text-center">
              <div className="font-semibold text-sm">✨ Jewelry</div>
              <div className="text-xs">Collection</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="font-semibold text-sm">🎁 Custom</div>
              <div className="text-xs">Gifts</div>
            </div>
            <div className="hidden sm:block h-8 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="font-semibold text-sm">🔥 Trending</div>
              <div className="text-xs">Items</div>
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