import { Star, Heart, Quote } from "lucide-react";

const Gallery = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ayesha Khan",
      rating: 5,
      text: "Absolutely gorgeous jewelry! The quality exceeded my expectations and the custom gift basket was perfect for my sister's wedding.",
      product: "Custom Wedding Gift Set"
    },
    {
      id: 2,
      name: "Fatima Ali",
      rating: 5,
      text: "Sehrish has an incredible eye for beauty. The hair accessories I ordered were exactly what I wanted - elegant yet trendy.",
      product: "Hair Accessories Collection"
    },
    {
      id: 3,
      name: "Maria Ahmed",
      rating: 5,
      text: "Fast shipping, beautiful packaging, and stunning jewelry. Will definitely be ordering again for special occasions!",
      product: "Gold Chain Set"
    },
    {
      id: 4,
      name: "Zara Malik",
      rating: 5,
      text: "The personalized gift basket brought tears to my mother's eyes. Thank you for making her birthday so special!",
      product: "Mother's Day Special"
    },
    {
      id: 5,
      name: "Samira Hussain",
      rating: 5,
      text: "Beautiful craftsmanship and attention to detail. The nail accessories are my new favorite - so chic and well-made!",
      product: "Nail Art Collection"
    },
    {
      id: 6,
      name: "Nadia Sheikh",
      rating: 5,
      text: "Treasures by SK is now my go-to for all special gifts. The quality and customer service are absolutely outstanding.",
      product: "Anniversary Gift Set"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gradient mb-4">
            Customer Love
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing customers have to say about their Treasures by SK experience.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">4.9★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Custom Orders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">2025</div>
            <div className="text-sm text-muted-foreground">Year Established</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gradient-card p-6 rounded-2xl shadow-luxury hover:shadow-glow transition-luxury relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="h-6 w-6 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.product}</p>
                  </div>
                  <Heart className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-8 lg:p-12 rounded-2xl text-white shadow-luxury max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Experience the joy of giving and receiving something truly special. Your perfect piece is waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#shop"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground shadow-luxury h-11 rounded-md px-8"
              >
                Shop Now
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-hero text-white border border-white/20 hover:bg-white/10 hover:shadow-glow backdrop-blur-sm h-11 rounded-md px-8"
              >
                Custom Order
              </a>
            </div>
          </div>
        </div>

        {/* Instagram Feed Placeholder */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-gradient mb-2">
              Follow @treasures_by_sk
            </h3>
            <p className="text-muted-foreground">
              See our latest pieces and customer features on Instagram
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item}
                className="aspect-square bg-gradient-card rounded-xl shadow-luxury hover:shadow-glow transition-luxury flex items-center justify-center"
              >
                <div className="text-center text-muted-foreground">
                  <Heart className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;