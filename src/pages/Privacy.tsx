import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 sm:pt-28 pb-12 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12 animate-fade-in-up">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold mb-4 tracking-tight">
                Privacy Policy
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
                  Synergaise Ltd ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services or visit our website.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Information We Collect</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>

                <h3 className="text-xl font-heading font-semibold mb-3">Information you provide directly:</h3>
                <ul className="list-disc list-outside ml-6 space-y-2 text-lg text-muted-foreground mb-6">
                  <li>Name and contact details (email, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Information shared during discovery calls or consultations</li>
                  <li>Payment and billing information</li>
                  <li>Communications you send to us</li>
                </ul>

                <h3 className="text-xl font-heading font-semibold mb-3">Information collected automatically:</h3>
                <ul className="list-disc list-outside ml-6 space-y-2 text-lg text-muted-foreground mb-6">
                  <li>Website usage data (pages visited, time spent)</li>
                  <li>Device and browser information</li>
                  <li>IP address and approximate location</li>
                  <li>Cookies and similar technologies</li>
                </ul>

                <h3 className="text-xl font-heading font-semibold mb-3">Information from third parties:</h3>
                <ul className="list-disc list-outside ml-6 space-y-2 text-lg text-muted-foreground">
                  <li>LinkedIn profile data (only when you explicitly authorize our application to access your LinkedIn account)</li>
                  <li>Data from integrated business tools (CRM, scheduling platforms)</li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">How We Use Your Information</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2 text-lg text-muted-foreground">
                  <li>Provide and improve our consulting and automation services</li>
                  <li>Communicate with you about projects, updates, and support</li>
                  <li>Schedule meetings and manage client relationships</li>
                  <li>Send relevant information about our services (with your consent)</li>
                  <li>Comply with legal obligations</li>
                  <li>Analyze and improve our website and services</li>
                </ul>
              </section>

              {/* LinkedIn Data */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">LinkedIn Data</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  When you authorize our application to connect with your LinkedIn account, we may access:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2 text-lg text-muted-foreground mb-6">
                  <li>Your basic profile information (name, profile picture, headline)</li>
                  <li>Company page data (for page administrators only)</li>
                  <li>Posting capabilities on your behalf (only with explicit authorization)</li>
                </ul>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We will never:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2 text-lg text-muted-foreground mb-6">
                  <li>Access your LinkedIn data without your explicit consent</li>
                  <li>Share your LinkedIn data with third parties</li>
                  <li>Store your LinkedIn credentials</li>
                  <li>Use your data for purposes beyond what you've authorized</li>
                </ul>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  You can revoke access at any time through your LinkedIn account settings.
                </p>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Data Sharing</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal data. We may share information with:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2 text-lg text-muted-foreground mb-6">
                  <li>Service providers who help us deliver our services (e.g., scheduling tools, payment processors)</li>
                  <li>Professional advisors (lawyers, accountants) when necessary</li>
                  <li>Authorities when required by law</li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  All third parties are required to protect your data and use it only for specified purposes.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Data Retention</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We retain your personal data only for as long as necessary to:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2 text-lg text-muted-foreground mb-6">
                  <li>Provide our services to you</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  You can request deletion of your data at any time (see Your Rights below).
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Data Security</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data, including:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2 text-lg text-muted-foreground">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure access controls</li>
                  <li>Regular security assessments</li>
                  <li>Staff training on data protection</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Your Rights</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2 text-lg text-muted-foreground mb-6">
                  <li><strong className="text-foreground">Access</strong> your personal data we hold</li>
                  <li><strong className="text-foreground">Correct</strong> inaccurate or incomplete data</li>
                  <li><strong className="text-foreground">Delete</strong> your data (subject to legal requirements)</li>
                  <li><strong className="text-foreground">Object</strong> to certain processing activities</li>
                  <li><strong className="text-foreground">Withdraw consent</strong> at any time</li>
                  <li><strong className="text-foreground">Data portability</strong> — receive your data in a structured format</li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:hello@synergaise.com" className="text-primary hover:underline">
                    hello@synergaise.com
                  </a>
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Cookies</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our website uses cookies to improve your experience. You can control cookies through your browser settings. Essential cookies are required for the website to function properly.
                </p>
              </section>

              {/* International Transfers */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">International Transfers</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your data may be transferred to and processed in countries outside the UK/EEA. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </section>

              {/* Changes to This Policy */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Changes to This Policy</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the "Last updated" date.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">Contact Us</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  If you have questions about this privacy policy or our data practices:
                </p>
                <div className="text-lg text-muted-foreground leading-relaxed mb-6">
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
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For complaints about our data handling, you may also contact the UK Information Commissioner's Office (ICO) at{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://ico.org.uk
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
