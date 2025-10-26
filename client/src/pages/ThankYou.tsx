import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Phone, Instagram, Share2 } from "lucide-react";
import { Link } from "wouter";

export default function ThankYou() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Ohio Down Payment Assistance",
          text: "I just found out I might qualify for up to $15,000 in down payment assistance! Check if you qualify too:",
          url: window.location.origin + "/ig",
        })
        .catch((error) => console.log("Error sharing", error));
    }
  };

  return (
    <>
      <Helmet>
        <title>Thank You! Check Your Email | Ohio Down Payment Help</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center px-4">
        <div className="container max-w-2xl mx-auto">
          <div className="bg-card border rounded-lg shadow-lg p-8 text-center">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>

            {/* Main Message */}
            <h1 className="text-3xl font-bold mb-4">You're All Set!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We've received your information and will contact you within 24 hours with your personalized eligibility results.
            </p>

            {/* What's Next */}
            <div className="bg-muted/50 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-bold mb-4">What Happens Next?</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Check Your Email</h3>
                    <p className="text-sm text-muted-foreground">
                      We've sent you a confirmation email with important information about Ohio down payment programs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">We'll Contact You</h3>
                    <p className="text-sm text-muted-foreground">
                      A Geneva Financial loan officer will reach out within 24 hours to discuss your specific situation and program options.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Get Pre-Approved</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll help you get pre-approved and access the down payment assistance programs you qualify for.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t pt-6 mb-6">
              <p className="text-sm text-muted-foreground mb-4">
                Questions? Reach out to us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="gap-2" asChild>
                  <a href="mailto:info@genevafi.com">
                    <Mail className="h-4 w-4" />
                    Email Us
                  </a>
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="tel:+18005511353">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="border-t pt-6">
              <p className="text-sm font-semibold mb-4">
                Know someone who needs down payment help?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                  asChild
                >
                  <a href="https://instagram.com/ohiodownpaymenthelp" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                    Follow Us On Instagram
                  </a>
                </Button>
                {typeof navigator !== 'undefined' && 'share' in navigator && (
                  <Button variant="outline" className="gap-2" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                    Share With Friends
                  </Button>
                )}
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-8">
              <Link href="/">
                <Button variant="ghost">← Back to Home</Button>
              </Link>
            </div>
          </div>

          {/* Geneva Financial Branding */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <div className="font-semibold">Geneva Financial LLC | NMLS #42056</div>
            <div>Equal Housing Opportunity</div>
          </div>
        </div>
      </div>
    </>
  );
}

