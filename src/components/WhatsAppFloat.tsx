import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your jewelry and gift collection. Can you please share more details?");
    window.open(`https://wa.me/923094163285?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Chat Bubble */}
      <div className="bg-white p-4 rounded-2xl shadow-luxury max-w-xs relative animate-pulse">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-3 w-3" />
        </button>
        <p className="text-sm text-foreground pr-4">
          👋 Hi! Need help finding the perfect piece? Chat with us on WhatsApp!
        </p>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-luxury hover:shadow-glow transition-luxury transform hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;