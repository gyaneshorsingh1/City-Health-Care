import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import WhyChooseCard from "@/components/WhyChooseCard";
import {
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  Stethoscope,
  TestTube,
  Heart,
  Activity,
  Shield,
  Users,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

const Index = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "OPD Consultation",
      description:
        "Expert consultations with experienced doctors for all your health concerns.",
    },
    {
      icon: TestTube,
      title: "Diagnostic Tests",
      description:
        "Comprehensive blood tests, pathology, and lab services with quick results.",
    },
    {
      icon: Activity,
      title: "ECG & Cardiac",
      description:
        "Advanced cardiac screening and ECG services for heart health monitoring.",
    },
    {
      icon: Heart,
      title: "Health Packages",
      description:
        "Preventive health checkup packages tailored for all age groups.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Excellent service and caring staff. The doctors are very attentive and explain everything clearly. Highly recommend for families.",
      rating: 5,
      service: "General Checkup",
    },
    {
      name: "Rajesh Kumar",
      text: "Quick test results and professional staff. The clinic is very clean and well-maintained. Very happy with the service.",
      rating: 5,
      service: "Blood Tests",
    },
    {
      name: "Meera Patel",
      text: "Best diagnostic center in the area. Affordable prices and modern equipment. The staff made me feel comfortable throughout.",
      rating: 5,
      service: "Health Package",
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced Doctors",
      description: "15+ years of experience in providing quality healthcare",
    },
    {
      icon: Sparkles,
      title: "Modern Equipment",
      description: "Latest diagnostic technology for accurate results",
    },
    {
      icon: Shield,
      title: "Hygienic Environment",
      description: "Clean, sanitized facilities following strict protocols",
    },
    {
      icon: CheckCircle,
      title: "Affordable Care",
      description: "Quality healthcare at prices that fit your budget",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern medical clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        <div className="container-medical relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Heart className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">
                Trusted by 10,000+ Patients
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              Trusted Healthcare Services in Your City
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Experience compassionate care with our team of experienced doctors 
              and modern diagnostic facilities. Your health and well-being is our 
              top priority.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/appointment">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-card border-b border-border">
        <div className="container-medical py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Working Hours</p>
                <p className="font-medium text-foreground">Mon - Sat: 9AM - 8PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">123 Main Road, City</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-end">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Emergency</p>
                <p className="font-medium text-accent">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-medical">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-muted-foreground">
              From routine checkups to advanced diagnostics, we offer a wide range 
              of medical services to keep you and your family healthy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-medical">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                Your Health Deserves the Best Care
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At HealthCare Diagnostic Center, we combine expertise with 
                compassion to deliver healthcare services you can trust. Our 
                commitment to your well-being drives everything we do.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <WhyChooseCard key={index} {...item} />
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Quick Appointment
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
                      WhatsApp for Appointment
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link to="/appointment">
                      <Calendar className="w-5 h-5" />
                      Book Online
                    </Link>
                  </Button>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  We typically respond within 30 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-medical">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Here's what our patients have to 
              say about their experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding medical-gradient">
        <div className="container-medical text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Need Medical Assistance?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to help you with all your healthcare needs. 
            Contact us today to schedule your appointment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
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
      </section>

      {/* Contact Preview */}
      <section className="section-padding bg-card">
        <div className="container-medical">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Visit Us
              </span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-6">
                Our Location
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      123, Main Road, City Center,<br />
                      Your City - 123456
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Working Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: Emergency Only
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-6" asChild>
                <Link to="/contact">
                  Get Directions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-muted rounded-2xl overflow-hidden h-64 lg:h-auto">
              {/* Map placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-secondary">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Map Location</p>
                  <Button variant="link" asChild className="mt-2">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
