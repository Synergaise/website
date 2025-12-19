import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 sm:pt-28 pb-12 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12 animate-fade-in-up">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold mb-4 tracking-tight">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Synergaise Ltd</strong>
                <br />
                Last updated: December 19, 2024
              </p>
            </div>

            {/* Content */}
            <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Introduction</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Content to be added]
                </p>
              </section>

              {/* Use of Services */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Use of Services</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Content to be added]
                </p>
              </section>

              {/* User Accounts */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">User Accounts</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Content to be added]
                </p>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Intellectual Property</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Content to be added]
                </p>
              </section>

              {/* Payment Terms */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Payment Terms</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Content to be added]
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Limitation of Liability</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Content to be added]
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Termination</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Content to be added]
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Governing Law</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Content to be added]
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Changes to Terms</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Content to be added]
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Contact Information</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  If you have questions about these terms:
                </p>
                <div className="text-lg text-muted-foreground leading-relaxed">
                  <p className="font-semibold text-foreground">Synergaise Ltd</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:hello@synergaise.com" className="text-primary hover:underline">
                      hello@synergaise.com
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a href="https://synergaise.com" className="text-primary hover:underline">
                      https://synergaise.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
