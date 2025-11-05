import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Intelligent Repairs",
    subtitle: "Service Automation System",
    description: "End-to-end workflow automation reducing manual tasks by 85% and improving response times for customer inquiries.",
    tags: ["Automation", "CRM Integration", "AI Triage"],
  },
  {
    title: "Prestige Contractors",
    subtitle: "Scheduling Portal",
    description: "Custom scheduling and resource management system enabling seamless coordination across multiple project sites.",
    tags: ["Portal Development", "Scheduling", "Integration"],
  },
  {
    title: "Pipedrive Scorecarding",
    subtitle: "Credit Assessment System",
    description: "Automated credit scoring and risk assessment pipeline integrated directly into sales workflows.",
    tags: ["Data Processing", "Risk Analysis", "API Integration"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="reviews" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-graphite/10 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-[42px] font-heading font-bold leading-[1.2] tracking-tight">
            Client Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world impact from intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-card backdrop-blur-sm border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-glow-card space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl md:text-2xl lg:text-[28px] font-heading font-bold leading-[1.3]">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm font-accent text-primary uppercase tracking-wider">
                  {project.subtitle}
                </p>
              </div>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-accent bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
