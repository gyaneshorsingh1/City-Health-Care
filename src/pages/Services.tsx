import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  TestTube,
  Activity,
  Heart,
  Scan,
  Microscope,
  Baby,
  Brain,
  Bone,
  Eye,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General OPD Consultation",
      description:
        "Comprehensive outpatient consultations for common illnesses, chronic disease management, and preventive care advice from experienced physicians.",
      features: ["Fever & Cold Treatment", "Chronic Disease Care", "Health Counseling"],
    },
    {
      icon: TestTube,
      title: "Blood Tests & Pathology",
      description:
        "Complete range of blood tests including CBC, blood sugar, lipid profile, thyroid tests, and more with accurate results.",
      features: ["Complete Blood Count", "Sugar & Diabetes Tests", "Thyroid Profile"],
    },
    {
      icon: Scan,
      title: "X-Ray & Imaging",
      description:
        "Digital X-ray services for accurate diagnosis of bone fractures, chest conditions, and other internal issues.",
      features: ["Digital X-Ray", "Chest X-Ray", "Bone Imaging"],
    },
    {
      icon: Activity,
      title: "ECG & Cardiac Screening",
      description:
        "Advanced ECG services for heart health monitoring, detecting arrhythmias, and cardiac risk assessment.",
      features: ["12-Lead ECG", "Heart Rate Analysis", "Cardiac Risk Assessment"],
    },
    {
      icon: Microscope,
      title: "Ultrasound Services",
      description:
        "Non-invasive ultrasound imaging for abdominal, pelvic, and other organ examinations with detailed reports.",
      features: ["Abdominal Ultrasound", "Pelvic Scan", "Thyroid Ultrasound"],
    },
    {
      icon: Heart,
      title: "Health Packages",
      description:
        "Comprehensive health checkup packages designed for different age groups and health requirements.",
      features: ["Basic Health Checkup", "Executive Package", "Senior Citizen Package"],
    },
    {
      icon: Baby,
      title: "Pediatric Care",
      description:
        "Specialized healthcare services for infants, children, and adolescents including vaccinations and growth monitoring.",
      features: ["Child Consultation", "Vaccinations", "Growth Monitoring"],
    },
    {
      icon: Brain,
      title: "Neurological Tests",
      description:
        "Diagnostic tests for neurological conditions including EEG and nerve conduction studies.",
      features: ["EEG Testing", "Nerve Studies", "Neurological Assessment"],
    },
    {
      icon: Bone,
      title: "Orthopedic Consultation",
      description:
        "Expert consultation for bone, joint, and muscle problems including sports injuries and arthritis.",
      features: ["Joint Pain Treatment", "Sports Injuries", "Arthritis Care"],
    },
    {
      icon: Eye,
      title: "Eye Checkup",
      description:
        "Comprehensive eye examinations for vision problems, glaucoma screening, and general eye health.",
      features: ["Vision Testing", "Glaucoma Screening", "Eye Health Check"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="medical-gradient py-20">
        <div className="container-medical">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              We offer a comprehensive range of medical and diagnostic services 
              to meet all your healthcare needs under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-medical">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-card transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, fIndex) => (
                        <span
                          key={fIndex}
                          className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-medical">
          <div className="bg-card rounded-3xl p-8 md:p-12 text-center shadow-xl border border-border">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Need Help Choosing a Service?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our staff is here to help you understand which tests or services 
              you need. Contact us for guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5" />
                  Call: +91 98765 43210
                </a>
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
              <Button variant="outline" size="lg" asChild>
                <Link to="/appointment">
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
