import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="medical-gradient py-16">
        <div className="container-medical">
          <h1 className="font-heading text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/90">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-medical">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Your Privacy Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At HealthCare Diagnostic Center, we are committed to protecting 
                your privacy and ensuring the confidentiality of your personal 
                and medical information.
              </p>

              <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Information We Collect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Personal details (name, phone number, email, address)</li>
                <li>Medical history and health records</li>
                <li>Appointment and treatment information</li>
                <li>Payment and billing details</li>
              </ul>

              <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                How We Use Your Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your information is used for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Providing medical care and treatment</li>
                <li>Scheduling and managing appointments</li>
                <li>Processing payments and billing</li>
                <li>Sending important health updates and reminders</li>
                <li>Improving our services</li>
              </ul>

              <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Data Security
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We implement strict security measures to protect your data from 
                unauthorized access, disclosure, alteration, or destruction. All 
                medical records are stored securely and access is limited to 
                authorized personnel only.
              </p>

              <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Patient Confidentiality
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We maintain strict doctor-patient confidentiality. Your medical 
                information will never be shared with third parties without your 
                explicit consent, except as required by law.
              </p>

              <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Your Rights
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Access your medical records</li>
                <li>Request corrections to your information</li>
                <li>Know how your data is being used</li>
                <li>Opt-out of non-essential communications</li>
              </ul>

              <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-4">
                Contact Us
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or how we 
                handle your information, please contact us at:
              </p>
              <div className="bg-secondary rounded-xl p-4 mt-4">
                <p className="text-foreground font-medium">HealthCare Diagnostic Center</p>
                <p className="text-muted-foreground">Phone: +91 98765 43210</p>
                <p className="text-muted-foreground">Email: info@healthcareclinic.com</p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Button variant="outline" asChild>
                  <Link to="/">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
