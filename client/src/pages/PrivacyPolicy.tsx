import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Ohio Down Payment Help</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="container py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img
                  src="/ohio_dpa_profile_logo.png"
                  alt="Ohio Down Payment Help"
                  className="h-12 w-12"
                />
                <div>
                  <h1 className="text-lg font-bold">Ohio Down Payment Help</h1>
                  <p className="text-xs text-muted-foreground">Geneva Financial LLC | NMLS #42056</p>
                </div>
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-sm font-medium hover:text-primary">
                  Home
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Privacy Policy Content */}
        <main className="flex-1">
          <div className="container py-16">
            <div className="max-w-4xl mx-auto prose prose-slate">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Effective Date:</strong> October 26, 2025<br />
                <strong>Contact:</strong> Cory Lawson |{" "}
                <a href="mailto:clawson@genevafi.com" className="text-primary hover:underline">
                  clawson@genevafi.com
                </a>
              </p>

              <p className="mb-6">
                At Geneva Financial, LLC, your privacy is important to us. This Privacy Policy outlines how we collect, use, 
                and protect your personal information in compliance with federal and state laws, including the Gramm-Leach-Bliley 
                Act (GLBA) and other applicable regulations.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We may collect the following types of information when you visit our website or submit a form:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Current address</li>
                <li>Financial details (e.g., income, credit score range)</li>
                <li>Other information you voluntarily submit</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Respond to your inquiries or application</li>
                <li>Determine program eligibility</li>
                <li>Provide mortgage options</li>
                <li>Improve our services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mb-6">
                <strong>We do not sell or rent your personal information to third parties.</strong>
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information only with:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Authorized employees and agents of Geneva Financial, LLC</li>
                <li>Third-party service providers assisting in mortgage processing</li>
                <li>Government or regulatory agencies as required by law</li>
              </ul>
              <p className="mb-6">
                All third parties are required to safeguard your data per applicable privacy regulations.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies and Tracking</h2>
              <p className="mb-6">
                We may use cookies or third-party tools (e.g., Google Analytics, Meta Pixels) to improve website experience 
                and marketing effectiveness. You may opt out via your browser settings.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Choices</h2>
              <p className="mb-6">
                You may request access to or deletion of your personal data by contacting us at{" "}
                <a href="mailto:clawson@genevafi.com" className="text-primary hover:underline">
                  clawson@genevafi.com
                </a>
                . We will respond within the time limits required by law.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
              <p className="mb-6">
                We use reasonable administrative, technical, and physical security measures to protect your information. 
                However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Compliance With Laws</h2>
              <p className="mb-6">
                This website complies with federal consumer protection laws, including the GLBA, CCPA (if applicable), 
                and NMLS guidelines.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Updates to This Policy</h2>
              <p className="mb-6">
                We reserve the right to update this privacy policy at any time. Changes will be posted on this page 
                with the revised effective date.
              </p>

              <div className="mt-12 p-6 bg-muted rounded-lg">
                <p className="text-sm text-center">
                  <strong>Questions or Concerns?</strong><br />
                  Contact Cory Lawson at{" "}
                  <a href="mailto:clawson@genevafi.com" className="text-primary hover:underline">
                    clawson@genevafi.com
                  </a>
                  <br />
                  Geneva Financial, LLC | NMLS #42056<br />
                  2029 Riverside Drive, Suite 200, Columbus, OH 43221
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link href="/" className="text-primary hover:underline font-medium">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t mt-16 py-8 bg-card/50">
          <div className="container text-center text-sm text-muted-foreground">
            <div className="font-semibold text-foreground mb-3">
              Cory Lawson NMLS #891785
            </div>
            <div className="mb-2">
              Licensed in Ohio, Florida, and Michigan
            </div>
            <div className="mb-2">
              Geneva Financial, LLC | NMLS #42056
            </div>
            <div className="mb-2">
              Branch Office: 2029 Riverside Drive, Suite 200, Columbus, OH 43221
            </div>
            <div className="mb-3">
              <a href="mailto:clawson@genevafi.com" className="text-primary hover:underline">
                clawson@genevafi.com
              </a>
            </div>
            <div className="mt-4 text-xs max-w-3xl mx-auto leading-relaxed">
              Equal Housing Opportunity. All loans subject to underwriting approval and program availability. 
              This is not a commitment to lend or extend credit. Programs may not be available in all areas. 
              Rates, terms, programs, and underwriting policies subject to change without notice. 
              Some products may not be available in all states. Restrictions apply. 
              For licensing information, visit{" "}
              <a 
                href="https://www.nmlsconsumeraccess.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.nmlsconsumeraccess.org
              </a>
              . © 2025 DownPaymentOhio.org. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

