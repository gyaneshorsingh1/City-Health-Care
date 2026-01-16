import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      link: "tel:+919876543210",
      action: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Quick Response",
      link: "https://wa.me/919876543210",
      action: "Message Us",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@healthcareclinic.com",
      link: "mailto:info@healthcareclinic.com",
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123, Main Road, City Center, Your City - 123456",
      link: "https://maps.google.com",
      action: "Get Directions",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="medical-gradient py-20">
        <div className="container-medical">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              Have questions or need to schedule a visit? Reach out to us through 
              any of the channels below. We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-background">
        <div className="container-medical">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.content}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.action}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Map & Hours */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-secondary rounded-3xl overflow-hidden h-80 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.904969442692!2d72.5557!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzMnMjAuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>

            {/* Hours & Quick Contact */}
            <div className="space-y-6">
              <div className="bg-card rounded-3xl p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      Working Hours
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We're here when you need us
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
                    { day: "Sunday", hours: "Emergency Only" },
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="text-foreground font-medium">
                        {schedule.day}
                      </span>
                      <span className="text-muted-foreground">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent/10 rounded-3xl p-8 border border-accent/20">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Quick Contact
                </h3>
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
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding medical-gradient">
        <div className="container-medical text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Don't wait for your health concerns. Schedule a consultation today.
          </p>
          <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/appointment">
              Book Appointment Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
