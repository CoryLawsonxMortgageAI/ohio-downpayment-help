import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { CheckCircle2, Shield, Clock, Gift, Instagram } from "lucide-react";
import { toast } from "sonner";

export default function InstagramLanding() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    zipCode: "",
    isFirstTimeHomebuyer: "",
    householdIncome: "",
    creditScoreRange: "",
  });

  const submitLead = trpc.leads.submit.useMutation({
    onSuccess: () => {
      toast.success("Success! Check your email for next steps.");
      // Redirect to thank you page
      window.location.href = "/thank-you";
    },
    onError: (error) => {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    submitLead.mutate({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      zipCode: formData.zipCode,
      isFirstTimeBuyer: formData.isFirstTimeHomebuyer === "Yes" ? "yes" : "no",
      estimatedIncome: formData.householdIncome,
      estimatedCreditScore: formData.creditScoreRange,
      source: "instagram",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Get Up To $15,000 For Your Down Payment | Ohio Down Payment Help</title>
        <meta
          name="description"
          content="Seen us on Instagram? Get your free eligibility check now. Find out if you qualify for up to $15,000+ in down payment assistance in Ohio."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/ohio_dpa_profile_logo.png"
                alt="Ohio Down Payment Help"
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg">Ohio Down Payment Help</span>
                <span className="text-xs text-muted-foreground">Geneva Financial LLC | NMLS #42056</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section - Instagram Optimized */}
        <section className="py-8 px-4">
          <div className="container max-w-2xl mx-auto text-center">
            {/* Instagram Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Instagram className="h-4 w-4" />
              As Seen On Instagram
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Get Up To <span className="text-primary">$15,000+</span> For Your Down Payment
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              You don't need 20% down. Most Ohio buyers qualify for programs that give you FREE money for your down payment.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center">
                <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">100% Free</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">Secure</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">2 Min Check</span>
              </div>
              <div className="flex flex-col items-center">
                <Gift className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">No Obligation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified Form - Instagram Optimized */}
        <section className="py-8 px-4">
          <div className="container max-w-xl mx-auto">
            <div className="bg-card border rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-center mb-2">Check Your Eligibility</h2>
              <p className="text-center text-muted-foreground mb-6">
                Fill out the form below. Takes just 2 minutes!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.smith@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(614) 555-0123"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>

                {/* Location Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="Columbus"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input
                      id="zipCode"
                      placeholder="43215"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    />
                  </div>
                </div>

                {/* Qualification Fields */}
                <div className="space-y-2">
                  <Label htmlFor="firstTimeHomebuyer">Are you a first-time homebuyer?</Label>
                  <Select
                    value={formData.isFirstTimeHomebuyer}
                    onValueChange={(value) => handleInputChange("isFirstTimeHomebuyer", value)}
                  >
                    <SelectTrigger id="firstTimeHomebuyer">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="householdIncome">Estimated Household Income</Label>
                  <Select
                    value={formData.householdIncome}
                    onValueChange={(value) => handleInputChange("householdIncome", value)}
                  >
                    <SelectTrigger id="householdIncome">
                      <SelectValue placeholder="Select range..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Under $40,000">Under $40,000</SelectItem>
                      <SelectItem value="$40,000 - $60,000">$40,000 - $60,000</SelectItem>
                      <SelectItem value="$60,000 - $80,000">$60,000 - $80,000</SelectItem>
                      <SelectItem value="$80,000 - $100,000">$80,000 - $100,000</SelectItem>
                      <SelectItem value="Over $100,000">Over $100,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="creditScoreRange">Estimated Credit Score Range</Label>
                  <Select
                    value={formData.creditScoreRange}
                    onValueChange={(value) => handleInputChange("creditScoreRange", value)}
                  >
                    <SelectTrigger id="creditScoreRange">
                      <SelectValue placeholder="Select range..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Under 580">Under 580</SelectItem>
                      <SelectItem value="580 - 620">580 - 620</SelectItem>
                      <SelectItem value="620 - 680">620 - 680</SelectItem>
                      <SelectItem value="680 - 740">680 - 740</SelectItem>
                      <SelectItem value="Over 740">Over 740</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Trust Badges */}
                <div className="bg-primary/5 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>100% Free - No Obligation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Your information is secure and never shared</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Instant results via email</span>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  disabled={submitLead.isPending}
                >
                  {submitLead.isPending ? "CHECKING..." : "CHECK MY ELIGIBILITY (FREE)"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-8 px-4 bg-muted/30">
          <div className="container max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Join Hundreds Of Ohio Homebuyers</h3>
            <p className="text-muted-foreground mb-6">
              We've helped hundreds of Ohioans access down payment assistance programs. You could be next!
            </p>
            <div className="flex justify-center gap-2">
              <div className="bg-card border rounded-lg p-4 flex-1 max-w-xs">
                <div className="text-3xl font-bold text-primary mb-1">$15K+</div>
                <div className="text-sm text-muted-foreground">Average Assistance</div>
              </div>
              <div className="bg-card border rounded-lg p-4 flex-1 max-w-xs">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Families Helped</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-card py-8 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-4 mb-6">
              <img
                src="/ohio_dpa_profile_logo.png"
                alt="Ohio Down Payment Help"
                className="h-12 w-12"
              />
              <div className="text-center">
                <div className="font-bold">Geneva Financial LLC</div>
                <div className="text-sm text-muted-foreground">NMLS #42056</div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>⚖️</span>
                <span>Equal Housing Opportunity</span>
              </div>
            </div>

            <div className="text-xs text-muted-foreground text-center space-y-2 max-w-2xl mx-auto">
              <p>
                © 2025 DownPaymentOH.org is for informational purposes only. No guarantee of accuracy is expressed or implied. Programs shown may not include all options or pricing structures. Rates, terms, programs and underwriting policies subject to change without notice. This is not an offer to extend credit or a commitment to lend. All loans subject to underwriting approval. Equal Housing Opportunity.
              </p>
              <p>
                By completing and submitting the form provided on this website, you expressly grant permission for Geneva Financial LLC to contact you through the information you've provided. This may include contact via email, phone call, or text message.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

