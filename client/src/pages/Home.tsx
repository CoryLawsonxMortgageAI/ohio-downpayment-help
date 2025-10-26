import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { trpc } from "@/lib/trpc";
import { CheckCircle2, Home as HomeIcon, DollarSign, TrendingUp, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

export default function Home() {
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
      toast.success("Thank you! We'll be in touch within 24 hours.");
      setFormData({
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
      
      // Scroll to success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
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
      source: "website",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Ohio Down Payment Assistance Programs | Geneva Financial | NMLS #42056</title>
        <meta name="description" content="Discover down payment assistance programs in Ohio. Get grants up to $15,000+ for qualified homebuyers. FHA, VA, USDA loans available. Geneva Financial LLC | NMLS #42056" />
        <meta name="keywords" content="ohio down payment assistance, ohio first time home buyer, down payment grants ohio, fha loans ohio, va loans ohio, usda loans ohio, ohfa programs, geneva financial, columbus ohio mortgage" />
        <link rel="canonical" href="https://ohiodownpaymenthelp.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ohiodownpaymenthelp.com/" />
        <meta property="og:title" content="Ohio Down Payment Assistance Programs | Geneva Financial" />
        <meta property="og:description" content="Discover how easy it is to buy a home in Ohio with little or no money down. Programs available for qualified buyers." />
        <meta property="og:image" content="https://ohiodownpaymenthelp.com/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ohiodownpaymenthelp.com/" />
        <meta property="twitter:title" content="Ohio Down Payment Assistance Programs" />
        <meta property="twitter:description" content="Discover how easy it is to buy a home in Ohio with little or no money down." />
        <meta property="twitter:image" content="https://ohiodownpaymenthelp.com/logo.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Ohio Down Payment Help",
            "description": "Down payment assistance programs for Ohio homebuyers",
            "provider": {
              "@type": "Organization",
              "name": "Geneva Financial LLC",
              "identifier": "NMLS #42056"
            },
            "areaServed": {
              "@type": "State",
              "name": "Ohio"
            },
            "serviceType": "Mortgage Lending",
            "url": "https://ohiodownpaymenthelp.com"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
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
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-sm font-medium hover:text-primary">
                  Home
                </Link>
                <Link href="/programs" className="text-sm font-medium hover:text-primary">
                  Programs
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Want To Buy A House And Need Help With The Down Payment?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Discover How Easy It Is To Buy A Home In Ohio With Little Or No Money Down
                With Federal, State, Or Municipal Down Payment Programs For Ohio Homes
              </p>
              <Button
                size="lg"
                className="text-lg h-14 px-8"
                onClick={() => {
                  document.getElementById("eligibility-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                SEE HOW MUCH I CAN GET
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <h3 className="text-3xl font-bold text-center mb-12">Why Choose Down Payment Assistance Programs?</h3>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <DollarSign className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Low Down Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Buy with as little as 3.5% down or even $0 down for qualified buyers
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <HomeIcon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Grants Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get up to $15,000+ in grants that don't have to be repaid
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Build Equity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Stop paying rent and start building wealth through homeownership
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Expert Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Geneva Financial guides you through every step of the process
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h3 className="text-3xl font-bold text-center mb-12">Available Programs For Qualified Ohio Buyers</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    FHA Loans
                  </CardTitle>
                  <CardDescription>As low as 3.5% down for qualified buyers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Credit scores as low as 580 accepted</li>
                    <li>• Available statewide in Ohio</li>
                    <li>• Can be combined with assistance programs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    VA Loans
                  </CardTitle>
                  <CardDescription>$0 down for eligible veterans</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• No down payment required</li>
                    <li>• No mortgage insurance</li>
                    <li>• Competitive interest rates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    USDA Loans
                  </CardTitle>
                  <CardDescription>$0 down for qualified rural buyers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• No down payment required</li>
                    <li>• Many suburban areas qualify</li>
                    <li>• Income limits apply</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    OHFA Programs
                  </CardTitle>
                  <CardDescription>Grants up to $15,000 for eligible buyers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• No repayment required (conditions apply)</li>
                    <li>• First-time buyer programs</li>
                    <li>• Limited funding available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Eligibility Form */}
        <section id="eligibility-form" className="py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">Check Your Eligibility</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below to see which programs you may qualify for. It takes just 2 minutes!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Personal Information</h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
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
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
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
                          onChange={(e) => handleInputChange("email", e.target.value)}
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
                          onChange={(e) => handleInputChange("phone", e.target.value)}
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
                          onValueChange={(value) => handleInputChange("isFirstTimeBuyer", value)}
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
                          onValueChange={(value) => handleInputChange("isMilitaryVeteran", value)}
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
                          onValueChange={(value) => handleInputChange("isFirstResponderHealthcareEducation", value)}
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
                          onChange={(e) => handleInputChange("householdSize", e.target.value)}
                          placeholder="e.g., 4"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="ownedHomeInLast3Years">Have you owned a home in the last 3 years? *</Label>
                        <Select
                          value={formData.ownedHomeInLast3Years}
                          onValueChange={(value) => handleInputChange("ownedHomeInLast3Years", value)}
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
                          onChange={(e) => handleInputChange("monthlyHouseholdIncome", e.target.value)}
                          placeholder="e.g., 5000"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="purchasePriceRange">Purchase Price Range *</Label>
                        <Select
                          value={formData.purchasePriceRange}
                          onValueChange={(value) => handleInputChange("purchasePriceRange", value)}
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
                          onChange={(e) => handleInputChange("monthlyRentOrMortgage", e.target.value)}
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
                          onChange={(e) => handleInputChange("monthlyDebtObligations", e.target.value)}
                          placeholder="e.g., 500"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="creditScore">What is your credit score? *</Label>
                        <Select
                          value={formData.creditScore}
                          onValueChange={(value) => handleInputChange("creditScore", value)}
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
                      className="w-full text-lg h-14"
                      disabled={submitLead.isPending}
                    >
                      {submitLead.isPending ? "Checking..." : "CHECK MY ELIGIBILITY (FREE)"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t mt-16 py-8 bg-card/50">
          <div className="container text-center text-sm text-muted-foreground">
            <div className="font-semibold text-foreground mb-2">Geneva Financial LLC | NMLS #42056</div>
            <div>Licensed in Ohio | Equal Housing Opportunity</div>
            <div className="mt-4 text-xs max-w-3xl mx-auto">
              Subject to credit approval and program availability. Programs may not be available in all areas.
              This is not an offer to extend credit or a commitment to lend. All information is subject to change without notice.
              Geneva Financial LLC is licensed in Ohio. Equal Housing Opportunity. © 2025 DownPaymentOhio.org for informational purposes only.
              No guarantee of accuracy is expressed or implied. Programs shown may not include all options or pricing structures.
              Rates, terms, programs and underwriting policies subject to change without notice. This is not an offer to extend
              credit or a commitment to lend. All loans subject to underwriting approval. Some products may not be available in
              all states. Restrictions apply. Geneva Financial, LLC NMLS ID #42056. Equal Housing Opportunity.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

