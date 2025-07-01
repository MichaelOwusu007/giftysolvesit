
import React, { useState } from 'react';
import { Calendar, MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const FloatingWidgets = () => {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');

  const openCalendly = () => {
    window.open('https://calendly.com/giftysolves', '_blank');
  };

  const sendWhatsAppMessage = () => {
    const message = whatsappMessage || 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/233554454439?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsWhatsAppOpen(false);
    setWhatsappMessage('');
  };

  return (
    <>
      {/* Fixed Appointment Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="flex flex-col gap-3">
          {/* WhatsApp Chat Widget */}
          {isWhatsAppOpen && (
            <Card className="w-80 mb-3 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold">Chat with us</h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsWhatsAppOpen(false)}
                  >
                    <X size={16} />
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Send us a message on WhatsApp and we'll get back to you as soon as possible!
                </p>
                <div className="space-y-3">
                  <Textarea
                    placeholder="Type your message here..."
                    value={whatsappMessage}
                    onChange={(e) => setWhatsappMessage(e.target.value)}
                    className="resize-none h-20"
                  />
                  <Button
                    onClick={sendWhatsAppMessage}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* WhatsApp Button */}
          <Button
            onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
            size="icon"
          >
            <MessageCircle size={24} />
          </Button>

          {/* Appointment Button */}
          <Button
            onClick={openCalendly}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
          >
            <Calendar size={20} />
            Book Appointment
          </Button>
        </div>
      </div>
    </>
  );
};

export default FloatingWidgets;
