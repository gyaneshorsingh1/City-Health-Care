import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Award,
  Heart,
  Users,
  Calendar,
  CheckCircle,
  Phone,
  MessageCircle,
} from "lucide-react";
import doctorImage from "@/assets/doctor-portrait.jpg";

const About = () => {
  const achievements = [
    { icon: Users, value: "10,000+", label: "Patients Served" },
    { icon: Calendar, value: "15+", label: "Years Experience" },
    { icon: Award, value: "50+", label: "Medical Awards" },
    { icon: Heart, value: "24/7", label: "Emergency Care" },
  ];

  const values = [
    "Patient-first approach in all treatments",
    "Transparent pricing with no hidden costs",
    "Latest medical equipment and technology",
    "Highly qualified and experienced staff",
    "Clean, hygienic, and comfortable environment",
    "Quick test results with accurate diagnosis",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="medical-gradient py-20">
        <div className="container-medical">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              About Our Clinic
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              HealthCare Diagnostic Center has been serving the community since 
              2010 with a commitment to providing exceptional healthcare services 
              at affordable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-b border-border">
        <div className="container-medical py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-secondary mx-auto mb-3 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-heading text-3xl font-bold text-foreground">
                  {item.value}
                </p>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="section-padding bg-background">
        <div className="container-medical">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Meet Our Doctor
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
                Dr. Rajesh Sharma
              </h2>
              <p className="text-lg text-primary font-medium mb-4">
                MBBS, MD (Medicine) | Senior Physician
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years of experience in general medicine and 
                diagnostics, Dr. Rajesh Sharma has dedicated his career to 
                providing compassionate and comprehensive healthcare to the 
                community. His patient-first approach and commitment to using 
                the latest medical technology has made him a trusted name in 
                the region.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "MBBS from Government Medical College",
                  "MD in General Medicine",
                  "Member of Indian Medical Association",
                  "Certified in Advanced Diagnostics",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Button asChild>
                  <Link to="/appointment">Book Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+919876543210">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={doctorImage}
                  alt="Dr. Rajesh Sharma"
                  className="rounded-3xl shadow-xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-2xl shadow-lg">
                  <p className="font-heading font-bold">15+ Years</p>
                  <p className="text-sm opacity-90">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-medical">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Mission
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
              Committed to Your Well-being
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our mission is to provide accessible, affordable, and high-quality 
              healthcare services to every member of our community. We believe 
              that everyone deserves the best medical care, regardless of their 
              background.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3 bg-card rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding medical-gradient">
        <div className="container-medical text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Experience Our Care?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Book your appointment today and let us take care of your health needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/appointment">Book Appointment</Link>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
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
    </div>
  );
};

export default About;
