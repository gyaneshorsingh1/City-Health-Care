import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import galleryLab from "@/assets/gallery-lab.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryConsultation from "@/assets/gallery-consultation.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const Gallery = () => {
  const images = [
    {
      src: heroClinic,
      alt: "Modern clinic consultation area",
      title: "Consultation Room",
    },
    {
      src: galleryReception,
      alt: "Welcoming reception area",
      title: "Reception Area",
    },
    {
      src: galleryLab,
      alt: "Advanced diagnostic laboratory",
      title: "Diagnostic Lab",
    },
    {
      src: galleryConsultation,
      alt: "Doctor consultation room",
      title: "Examination Room",
    },
    {
      src: doctorPortrait,
      alt: "Dr. Rajesh Sharma",
      title: "Our Doctor",
    },
    {
      src: galleryReception,
      alt: "Comfortable waiting area",
      title: "Waiting Area",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="medical-gradient py-20">
        <div className="container-medical">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Facilities
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              Take a virtual tour of our modern, hygienic clinic equipped with 
              the latest medical technology and comfortable patient areas.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-medical">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading font-semibold text-white text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-medical text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Want to Visit Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Experience our facilities in person. Book an appointment or visit 
            us for a consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/appointment">
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
