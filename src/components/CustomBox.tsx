import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, Package, Heart, Sparkles } from "lucide-react";

const CustomBox = () => {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    message: "",
    occasion: ""
  });

  const availableItems = [
    // Jewelry Items
    {
      id: 1,
      name: "Mini Pearl Earrings",
      price: 2500,
      category: "jewelry",
      image: "/placeholder.svg",
      description: "Delicate pearl earrings perfect for gifting"
    },
    {
      id: 2,
      name: "Charm Bracelet",
      price: 3200,
      category: "jewelry",
      image: "/placeholder.svg",
      description: "Customizable charm bracelet"
    },
    {
      id: 3,
      name: "Ring Set",
      price: 4500,
      category: "jewelry",
      image: "/placeholder.svg",
      description: "Set of 3 stackable rings"
    },
    // Gift Items
    {
      id: 4,
      name: "Scented Candle",
      price: 1200,
      category: "gifts",
      image: "/placeholder.svg",
      description: "Luxury lavender scented candle"
    },
    {
      id: 5,
      name: "Photo Frame",
      price: 1800,
      category: "gifts",
      image: "/placeholder.svg",
      description: "Elegant wooden photo frame"
    },
    {
      id: 6,
      name: "Personalized Card",
      price: 300,
      category: "gifts",
      image: "/placeholder.svg",
      description: "Custom greeting card with your message"
    },
    // Accessories
    {
      id: 7,
      name: "Silk Scrunchie",
      price: 450,
      category: "accessories",
      image: "/placeholder.svg",
      description: "Premium silk hair scrunchie"
    },
    {
      id: 8,
      name: "Hair Clip Set",
      price: 800,
      category: "accessories",
      image: "/placeholder.svg",
      description: "Set of decorative hair clips"
    }
  ];

  const boxSizes = [
    { id: "small", name: "Small Box", price: 500, items: "3-4 items", size: "15x15x8 cm" },
    { id: "medium", name: "Medium Box", price: 800, items: "5-7 items", size: "20x20x10 cm" },
    { id: "large", name: "Large Box", price: 1200, items: "8-12 items", size: "25x25x12 cm" }
  ];

  const [selectedBoxSize, setSelectedBoxSize] = useState("medium");

  const addItem = (item: any) => {
    const existing = selectedItems.find(i => i.id === item.id);
    if (existing) {
      setSelectedItems(selectedItems.map(i => 
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (itemId: number) => {
    const existing = selectedItems.find(i => i.id === itemId);
    if (existing && existing.quantity > 1) {
      setSelectedItems(selectedItems.map(i => 
        i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
      ));
    } else {
      setSelectedItems(selectedItems.filter(i => i.id !== itemId));
    }
  };

  const getTotalPrice = () => {
    const itemsTotal = selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const boxPrice = boxSizes.find(box => box.id === selectedBoxSize)?.price || 0;
    return itemsTotal + boxPrice;
  };

  const getItemCount = () => {
    return selectedItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <section id="custom-box" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gradient mb-4">
            Create Your Custom Box
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Design a personalized gift box with your choice of jewelry, accessories, and special items
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Available Items */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-6">Choose Your Items</h2>
            <div className="grid grid-cols-1 gap-4">
              {availableItems.map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-luxury hover:shadow-glow transition-luxury">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-20 md:w-24 h-32 sm:h-20 md:h-24 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-3 sm:p-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <h3 className="font-semibold text-sm md:text-base">{item.name}</h3>
                        <Badge variant="outline" className="text-xs self-start">
                          PKR {item.price}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <Badge variant="secondary" className="text-xs self-start">
                          {item.category}
                        </Badge>
                        <Button
                          size="sm"
                          variant="luxury"
                          onClick={() => addItem(item)}
                          className="h-8 px-4 text-xs self-start sm:self-auto"
                        >
                          <Plus className="h-3 w-3 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Custom Box Summary */}
          <div className="space-y-6">
            {/* Box Size Selection */}
            <Card className="shadow-luxury">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Select Box Size
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {boxSizes.map((box) => (
                  <div
                    key={box.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-luxury ${
                      selectedBoxSize === box.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedBoxSize(box.id)}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{box.name}</span>
                      <span className="text-sm font-bold">PKR {box.price}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {box.items} • {box.size}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Selected Items */}
            <Card className="shadow-luxury">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Your Box ({getItemCount()} items)
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedItems.length === 0 ? (
                  <p className="text-muted-foreground text-center py-6">
                    No items selected yet
                  </p>
                ) : (
                  <div className="space-y-3">
                    {selectedItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            PKR {item.price} each
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6"
                            onClick={() => removeItem(item.id)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6"
                            onClick={() => addItem(item)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Customization */}
            <Card className="shadow-luxury">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Personalization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Recipient Name</label>
                  <Input
                    placeholder="Enter recipient's name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Occasion</label>
                  <Input
                    placeholder="Birthday, Anniversary, etc."
                    value={customerInfo.occasion}
                    onChange={(e) => setCustomerInfo({...customerInfo, occasion: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Personal Message</label>
                  <Textarea
                    placeholder="Add a special message..."
                    value={customerInfo.message}
                    onChange={(e) => setCustomerInfo({...customerInfo, message: e.target.value})}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="shadow-luxury bg-gradient-card">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Items ({getItemCount()})</span>
                  <span>PKR {selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Box ({boxSizes.find(box => box.id === selectedBoxSize)?.name})</span>
                  <span>PKR {boxSizes.find(box => box.id === selectedBoxSize)?.price}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>PKR {getTotalPrice()}</span>
                </div>
                <Button 
                  className="w-full mt-4" 
                  variant="luxury" 
                  size="lg"
                  disabled={selectedItems.length === 0}
                >
                  Order Custom Box
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBox;