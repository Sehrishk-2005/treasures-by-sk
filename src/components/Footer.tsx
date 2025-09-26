import { Instagram, Facebook, Phone, Mail, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import treasuresLogo from "@/assets/treasures-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#shop" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const categories = [
    "Jewelry Collection",
    "Customized Gifts", 
    "Hair Accessories",
    "Nail Accessories",
    "Custom Baskets"
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your jewelry and gift collection. Can you please share more details?");
    window.open(`https://wa.me/923094163285?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src={treasuresLogo} 
                  alt="Treasures by SK" 
                  className="h-12 w-auto mb-4"
                />
                <p className="text-white/80 leading-relaxed">
                  Elegant jewelry and customized gifts crafted with love by Sehrish Khurram. 
                  Making every moment special since 2025.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/treasures_by_sk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-luxury"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com/treasuresby.SK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-luxury"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://tiktok.com/@treasures_by_sk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-luxury"
                >
                  <span className="text-xs font-bold">TT</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-accent">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-white transition-luxury"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-accent">Our Products</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category}>
                    <span className="text-white/80">{category}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-accent">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-white/80">+92 309 4163285</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-white/80">hello@treasuresbysk.com</span>
                </div>
                <div className="pt-2">
                  <Button 
                    variant="elegant" 
                    size="sm" 
                    onClick={handleWhatsApp}
                    className="group"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-white/10">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-accent">
              Stay Connected with Treasures by SK
            </h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Get exclusive offers, new collection updates, and special discounts delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="elegant" size="sm">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-white/60 mt-3">
              🎁 Get 10% off your first order when you subscribe!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-white/80 text-sm">
              © {currentYear} Treasures by SK. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-white/80 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent fill-accent" />
              <span>by Sehrish Khurram</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;