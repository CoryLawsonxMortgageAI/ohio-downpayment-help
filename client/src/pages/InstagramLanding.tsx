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
import { Checkbox } from "@/components/ui/checkbox";
import { Instagram, CheckCircle2, Shield, Clock, FileCheck } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { useLocation } from "wouter";

export default function InstagramLanding() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isFirstTimeBuyer: "",
    isMilitaryVeteran: "",
    isFirstResponderHealthcareEducation: "",
    householdSize: "",
    ownedHomeInLast3Years: "",
    monthlyHouseholdIncome: "",
    purchasePriceRange: "",
    monthlyRentOrMortgage: "",
    monthlyDebtObligations: "",
    creditScore: "",
  });

  const submitLead = trpc.leads.submit.useMutation({
    onSuccess: () => {
      setLocation("/thank-you");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead.mutate({
      ...formData,
      householdSize: formData.householdSize ? parseInt(formData.householdSize) : undefined,
      monthlyHouseholdIncome: formData.monthlyHouseholdIncome ? parseInt(formData.monthlyHouseholdIncome) : undefined,
      monthlyRentOrMortgage: formData.monthlyRentOrMortgage ? parseInt(formData.monthlyRentOrMortgage) : undefined,
      monthlyDebtObligations: formData.monthlyDebtObligations ? parseInt(formData.monthlyDebtObligations) : undefined,
      source: "instagram",
    });
  };

  return (
    <>
      <Helmet>
        <title>Check Your Eligibility - Ohio Down Payment Help</title>
        <meta
          name="description"
          content="Get up to $15,000+ in down payment assistance for your Ohio home. Check your eligibility in 2 minutes - 100% free, no obligation."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
        {/* Header */}
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="container py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/ohio_dpa_profile_logo.png"
                  alt="Ohio Down Payment Help"
                  className="h-12 w-12"
                />
                <div>
                  <h1 className="text-lg font-bold">Ohio Down Payment Help</h1>
                  <p className="text-xs text-muted-foreground">Geneva Financial LLC | NMLS #42056</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container py-8">
          {/* Instagram Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-6 mx-auto block w-fit">
            <Instagram className="h-4 w-4" />
            As Seen On Instagram
          </div>

          {/* Hero Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Up To $15,000+ For Your Down Payment
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Discover how easy it is to buy a home in Ohio with little or no money down
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border">
                <FileCheck className="h-6 w-6 text-primary" />
                <span className="text-sm font-semibold">100% Free</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-sm font-semibold">Secure</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border">
                <Clock className="h-6 w-6 text-primary" />
                <span className="text-sm font-semibold">2 Minutes</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="text-sm font-semibold">No Obligation</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Check Your Eligibility</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Personal Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Smith"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john.smith@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(614) 555-0123"
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Qualification Questions */}
                <div className="space-y-4 pt-4 border-t">
                  <h4 className="font-semibold text-lg">Qualification Questions</h4>

                  <div>
                    <Label htmlFor="isFirstTimeBuyer">Are you a first-time homebuyer? *</Label>
                    <Select
                      value={formData.isFirstTimeBuyer}
                      onValueChange={(value) => setFormData({ ...formData, isFirstTimeBuyer: value })}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="isMilitaryVeteran">
                      Are you currently serving in the US military or have you served prior? *
                    </Label>
                    <Select
                      value={formData.isMilitaryVeteran}
                      onValueChange={(value) => setFormData({ ...formData, isMilitaryVeteran: value })}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes - Active Military, Veteran, or Surviving Spouse</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="isFirstResponderHealthcareEducation">
                      Do you or a co-borrower work in any of the following professions? *
                    </Label>
                    <p className="text-sm text-muted-foreground mb-2">
                      First Responder, Healthcare, or Education
                    </p>
                    <Select
                      value={formData.isFirstResponderHealthcareEducation}
                      onValueChange={(value) => setFormData({ ...formData, isFirstResponderHealthcareEducation: value })}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="householdSize">How many people live in your household? *</Label>
                    <Input
                      id="householdSize"
                      type="number"
                      min="1"
                      max="20"
                      required
                      value={formData.householdSize}
                      onChange={(e) => setFormData({ ...formData, householdSize: e.target.value })}
                      placeholder="e.g., 4"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="ownedHomeInLast3Years">Have you owned a home in the last 3 years? *</Label>
                    <Select
                      value={formData.ownedHomeInLast3Years}
                      onValueChange={(value) => setFormData({ ...formData, ownedHomeInLast3Years: value })}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Financial Information */}
                <div className="space-y-4 pt-4 border-t">
                  <h4 className="font-semibold text-lg">Financial Information</h4>

                  <div>
                    <Label htmlFor="monthlyHouseholdIncome">
                      Total combined monthly household income *
                    </Label>
                    <p className="text-sm text-muted-foreground mb-2">
                      Include all sources and people who will be applying
                    </p>
                    <Input
                      id="monthlyHouseholdIncome"
                      type="number"
                      min="0"
                      required
                      value={formData.monthlyHouseholdIncome}
                      onChange={(e) => setFormData({ ...formData, monthlyHouseholdIncome: e.target.value })}
                      placeholder="e.g., 5000"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="purchasePriceRange">Purchase Price Range *</Label>
                    <Select
                      value={formData.purchasePriceRange}
                      onValueChange={(value) => setFormData({ ...formData, purchasePriceRange: value })}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select range..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100000-150000">$100,000 - $150,000</SelectItem>
                        <SelectItem value="150000-200000">$150,000 - $200,000</SelectItem>
                        <SelectItem value="200000-250000">$200,000 - $250,000</SelectItem>
                        <SelectItem value="250000-300000">$250,000 - $300,000</SelectItem>
                        <SelectItem value="300000-400000">$300,000 - $400,000</SelectItem>
                        <SelectItem value="400000-500000">$400,000 - $500,000</SelectItem>
                        <SelectItem value="500000+">$500,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="monthlyRentOrMortgage">
                      How much is your monthly rent or mortgage payment? *
                    </Label>
                    <Input
                      id="monthlyRentOrMortgage"
                      type="number"
                      min="0"
                      required
                      value={formData.monthlyRentOrMortgage}
                      onChange={(e) => setFormData({ ...formData, monthlyRentOrMortgage: e.target.value })}
                      placeholder="e.g., 1200"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthlyDebtObligations">
                      Monthly debt obligations *
                    </Label>
                    <p className="text-sm text-muted-foreground mb-2">
                      Credit cards, car payments, other debt only (do not include rent or utilities)
                    </p>
                    <Input
                      id="monthlyDebtObligations"
                      type="number"
                      min="0"
                      required
                      value={formData.monthlyDebtObligations}
                      onChange={(e) => setFormData({ ...formData, monthlyDebtObligations: e.target.value })}
                      placeholder="e.g., 500"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="creditScore">What is your credit score? *</Label>
                    <Select
                      value={formData.creditScore}
                      onValueChange={(value) => setFormData({ ...formData, creditScore: value })}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select range..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below-580">Below 580</SelectItem>
                        <SelectItem value="580-619">580 - 619</SelectItem>
                        <SelectItem value="620-679">620 - 679</SelectItem>
                        <SelectItem value="680-739">680 - 739</SelectItem>
                        <SelectItem value="740+">740+</SelectItem>
                        <SelectItem value="not-sure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-start gap-3">
                    <Checkbox id="consent1" required className="mt-1" />
                    <Label htmlFor="consent1" className="text-sm leading-relaxed cursor-pointer">
                      100% Free - No Obligation
                    </Label>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox id="consent2" required className="mt-1" />
                    <Label htmlFor="consent2" className="text-sm leading-relaxed cursor-pointer">
                      Your information is secure and never shared
                    </Label>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox id="consent3" required className="mt-1" />
                    <Label htmlFor="consent3" className="text-sm leading-relaxed cursor-pointer">
                      Instant results via email
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg h-14 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  disabled={submitLead.isPending}
                >
                  {submitLead.isPending ? "Checking..." : "CHECK MY ELIGIBILITY (FREE)"}
                </Button>

                {submitLead.isError && (
                  <p className="text-sm text-destructive text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>

            {/* Social Proof */}
            <div className="mt-8 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Ohio Families Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">$15K</div>
                  <div className="text-sm text-muted-foreground">Average Assistance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24hrs</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
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

