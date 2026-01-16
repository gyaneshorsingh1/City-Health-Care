import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-medical section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl medical-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">HC</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg leading-tight">
                  HealthCare
                </h3>
                <p className="text-xs text-background/70">Diagnostic Center</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Providing trusted healthcare services with modern diagnostic facilities 
              and experienced medical professionals. Your health is our priority.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/70">
              <Heart className="w-4 h-4 text-accent" />
              <span>Caring for your family since 2010</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Book Appointment", path: "/appointment" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="flex flex-col gap-2 text-sm text-background/70">
              <li>General OPD Consultation</li>
              <li>Blood Tests & Pathology</li>
              <li>X-Ray & Imaging</li>
              <li>ECG & Heart Checkup</li>
              <li>Ultrasound Services</li>
              <li>Health Packages</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-background/80 hover:text-background transition-colors"
              >
                <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:info@healthcareclinic.com"
                className="flex items-start gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@healthcareclinic.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123, Main Road, City Center,<br />Your City - 123456</span>
              </div>
              <div className="flex items-start gap-3 text-background/80">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: Emergency Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-medical py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-background/60">
          <p>© 2024 HealthCare Diagnostic Center. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-background transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
