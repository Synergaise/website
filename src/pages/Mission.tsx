import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Rocket, Wrench, Handshake, Globe } from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "Innovation through Curiosity",
    description: "We constantly explore emerging technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Rocket,
    title: "Empowerment through Learning",
    description: "We believe in upskilling teams and building internal capabilities for long-term success.",
  },
  {
    icon: Wrench,
    title: "Simplicity by Design",
    description: "Complex problems deserve elegant solutions. We build systems that are powerful yet intuitive.",
  },
  {
    icon: Handshake,
    title: "Integrity in Delivery",
    description: "We commit to transparency, reliability, and delivering measurable value to our partners.",
  },
  {
    icon: Globe,
    title: "Scalability in Everything",
    description: "Every system we build is designed to grow with your business, from prototype to enterprise.",
  },
];

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-heading font-bold leading-[1.1] tracking-tight">
              Our Mission & Values
            </h1>
            <p className="text-xl text-muted-foreground">
              We believe in continuous learning, innovation, and intelligent transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold leading-[1.2] text-center mb-12">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              At Synergaise, our mission is to create real, measurable business value by building the railroad to AI and automation for forward-thinking organisations. We guide companies from consulting to implementation and team training — empowering them to become data-driven, adaptive, and future-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Core Belief */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold leading-[1.2] text-center mb-12">
              Why We Exist
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              We believe in continuous learning and intelligent transformation. Businesses that learn and adapt will thrive — we help them harness AI to simplify work, amplify capability, and unlock growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-b from-transparent via-graphite/10 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold leading-[1.2] text-center mb-12">
              How We Deliver
            </h2>
            <ul className="space-y-6 text-lg text-muted-foreground">
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl">•</span>
                <span>Innovation and upskilling at the core of everything we do</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl">•</span>
                <span>Master the best tools — Make.com, n8n, Clay, Replit, Cursor, Lovable</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl">•</span>
                <span>Combine technical expertise with a consulting mindset</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl">•</span>
                <span>Deliver simple, scalable, and sustainable systems</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Offering */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold leading-[1.2] text-center mb-12">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-card backdrop-blur-sm border border-border rounded-lg">
                <h3 className="text-xl font-heading font-bold mb-2">Workflow Automation</h3>
                <p className="text-muted-foreground">Streamline operations with intelligent process automation</p>
              </div>
              <div className="p-6 bg-gradient-card backdrop-blur-sm border border-border rounded-lg">
                <h3 className="text-xl font-heading font-bold mb-2">Data Integration</h3>
                <p className="text-muted-foreground">Connect systems and unlock insights from your data</p>
              </div>
              <div className="p-6 bg-gradient-card backdrop-blur-sm border border-border rounded-lg">
                <h3 className="text-xl font-heading font-bold mb-2">AI Enablement</h3>
                <p className="text-muted-foreground">Deploy intelligent systems that enhance decision-making</p>
              </div>
              <div className="p-6 bg-gradient-card backdrop-blur-sm border border-border rounded-lg">
                <h3 className="text-xl font-heading font-bold mb-2">Team Upskilling</h3>
                <p className="text-muted-foreground">Empower your organization with AI literacy and tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-bold leading-[1.2] text-center mb-16">
            Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-card backdrop-blur-sm border border-border rounded-lg hover:border-primary transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-gradient-to-b from-transparent via-graphite/10 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <blockquote className="text-2xl md:text-3xl font-heading font-bold leading-[1.3] space-y-4">
              <p>"We don't start with what we do — we start with why.</p>
              <p>We believe in transformation through intelligent innovation.</p>
              <p className="text-primary">The result: elegant, cutting-edge systems that drive real business value."</p>
            </blockquote>
            <Link to="/">
              <Button
                variant="outline"
                size="lg"
                className="font-heading font-bold uppercase text-sm tracking-wider px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-8"
              >
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
