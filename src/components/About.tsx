import { Button } from "@/components/ui/button";
import { Heart, Star, Users, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Heart, value: "1000+", label: "Happy Customers" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Users, value: "500+", label: "Custom Orders" },
    { icon: Award, value: "2025", label: "Year Established" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gradient mb-6">
                Meet Sehrish Khurram
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                In 2025, <strong className="text-foreground">Sehrish Khurram</strong> launched <em>Treasures by SK</em> with a simple yet profound mission: to provide timeless jewelry and meaningful customized gifts that celebrate life's most precious moments.
              </p>
              
              <p>
                Based in Pakistan, Sehrish recognized the need for quality, affordable luxury that doesn't compromise on elegance or craftsmanship. Each piece in our collection is carefully selected and crafted to ensure it becomes a treasured possession for years to come.
              </p>
              
              <p>
                From delicate jewelry pieces that capture the essence of femininity to personalized gifts that tell unique stories, we believe that every woman deserves to feel beautiful and celebrated.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="luxury" size="lg" className="group">
                Learn More About Our Mission
                <Heart className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Stats & Mission */}
          <div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-card rounded-2xl shadow-luxury hover:shadow-glow transition-luxury">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full text-white mb-4">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Box */}
            <div className="bg-gradient-primary p-8 rounded-2xl text-white shadow-luxury">
              <h3 className="text-xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                "To create beautiful, meaningful pieces that celebrate the unique beauty and story of every woman. We believe luxury should be accessible, and every gift should carry the warmth of personal connection."
              </p>
              <div className="mt-4 text-right">
                <span className="text-accent font-medium">— Sehrish Khurram, Founder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-gradient mb-4">
              What Sets Us Apart
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality, personalization, and customer satisfaction drives everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Handpicked Quality</h4>
              <p className="text-muted-foreground text-sm">
                Every piece is carefully selected for its craftsmanship, durability, and timeless appeal.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Personal Touch</h4>
              <p className="text-muted-foreground text-sm">
                We specialize in customization, ensuring your gift tells your unique story.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Customer First</h4>
              <p className="text-muted-foreground text-sm">
                Your satisfaction is our priority, with dedicated support throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;