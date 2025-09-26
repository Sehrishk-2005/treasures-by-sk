import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your jewelry and gift collection. Can you please share more details?");
    window.open(`https://wa.me/923094163285?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to find your perfect piece or create a custom gift? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                Whether you're looking for the perfect piece from our collection or want to discuss a custom order, we're here to help make your vision a reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+92 309 4163285</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">hello@treasuresbysk.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/treasures_by_sk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-glow transition-luxury"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com/treasuresby.SK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-glow transition-luxury"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://tiktok.com/@treasures_by_sk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white hover:shadow-glow transition-luxury"
                >
                  <span className="text-xs font-bold">TT</span>
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-primary p-6 rounded-2xl text-white">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 mr-3" />
                <h4 className="font-semibold">Quick Chat on WhatsApp</h4>
              </div>
              <p className="text-white/90 mb-4 text-sm">
                Get instant responses and personalized recommendations through WhatsApp.
              </p>
              <Button 
                variant="elegant" 
                size="sm" 
                onClick={handleWhatsApp}
                className="w-full"
              >
                Start WhatsApp Chat
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-luxury">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about what you're looking for, custom requirements, or any questions you have..."
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>

              <Button type="submit" variant="luxury" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card p-8 lg:p-12 rounded-2xl shadow-luxury max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gradient mb-4">
              Stay Updated with Our Latest Collections
            </h3>
            <p className="text-muted-foreground mb-6">
              Be the first to know about new arrivals, exclusive offers, and special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button variant="luxury">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Get 10% off your first order when you subscribe!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;