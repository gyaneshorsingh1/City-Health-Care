import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle, Calendar, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || formData.name.length > 100) {
      toast.error("Please enter a valid name (max 100 characters)");
      return;
    }
    if (!formData.phone.trim() || !/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, '').slice(-10))) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    if (!formData.date) {
      toast.error("Please select a preferred date");
      return;
    }
    if (formData.message.length > 500) {
      toast.error("Message must be less than 500 characters");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Appointment request submitted! We will contact you shortly.");
      setFormData({ name: "", phone: "", date: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="medical-gradient py-20">
        <div className="container-medical">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Book an Appointment
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              Schedule your visit with us. Fill out the form below or contact us 
              directly. We'll get back to you within 30 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="section-padding bg-background">
        <div className="container-medical">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Request an Appointment
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your 10-digit phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength={15}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your health concern or preferred time..."
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                    rows={4}
                    className="mt-2"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Submit Appointment Request
                    </>
                  )}
                </Button>
              </form>
              <p className="text-center text-sm text-muted-foreground mt-4">
                We will contact you shortly to confirm your appointment.
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              <div className="bg-secondary rounded-3xl p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Prefer Instant Contact?
                </h3>
                <p className="text-muted-foreground mb-6">
                  For immediate assistance, you can call us directly or send a 
                  WhatsApp message. Our team responds within minutes.
                </p>
                <div className="flex flex-col gap-4">
                  <Button size="lg" className="w-full" asChild>
                    <a href="tel:+919876543210">
                      <Phone className="w-5 h-5" />
                      Call: +91 98765 43210
                    </a>
                  </Button>
                  <Button variant="whatsapp" size="lg" className="w-full" asChild>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp for Appointment
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 border border-border">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      icon: Clock,
                      title: "Quick Response",
                      text: "We'll confirm your appointment within 30 minutes",
                    },
                    {
                      icon: Calendar,
                      title: "Flexible Timing",
                      text: "Choose a time slot that works best for you",
                    },
                    {
                      icon: CheckCircle,
                      title: "No Hidden Charges",
                      text: "Transparent pricing for all services",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/10 rounded-3xl p-6 border border-accent/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      Working Hours
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: Emergency Only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
