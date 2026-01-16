import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  service?: string;
}

const TestimonialCard = ({ name, text, rating, service }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 relative">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-amber-400 fill-amber-400" : "text-muted"
            }`}
          />
        ))}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
        "{text}"
      </p>
      <div>
        <p className="font-heading font-semibold text-foreground">{name}</p>
        {service && (
          <p className="text-xs text-primary">{service}</p>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
