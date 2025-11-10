import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://synergaise.app.n8n.cloud/webhook-test/Website-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message Sent",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 space-y-4 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-heading font-bold leading-[1.1] tracking-tight">
                Let's build your system.
              </h1>
              <p className="text-xl text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-accent text-foreground uppercase tracking-wider">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-graphite border-border focus:border-primary"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-accent text-foreground uppercase tracking-wider">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-graphite border-border focus:border-primary"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-accent text-foreground uppercase tracking-wider">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-graphite border-border focus:border-primary"
                  placeholder="Your Company Ltd"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-accent text-foreground uppercase tracking-wider">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-graphite border-border focus:border-primary min-h-[200px]"
                  placeholder="Tell us about your project and what you're looking to achieve..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full font-heading font-bold uppercase text-sm tracking-wider"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </form>

            {/* Optional: Calendly Integration Placeholder */}
            <div className="mt-16 pt-16 border-t border-border text-center">
              <p className="text-lg text-muted-foreground mb-4">
                Prefer to schedule a call?
              </p>
              <Button
                variant="outline"
                size="lg"
                className="font-heading font-bold uppercase text-sm tracking-wider px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open("https://cal.com/jude-hill-a6kiig/discovery?overlayCalendar=true", "_blank")}
              >
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
