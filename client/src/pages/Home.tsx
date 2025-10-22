import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    city: "",
    zipCode: "",
    isFirstTimeBuyer: "",
    estimatedIncome: "",
    estimatedCreditScore: "",
  });

  const submitLead = trpc.leads.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We'll be in touch soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        zipCode: "",
        isFirstTimeBuyer: "",
        estimatedIncome: "",
        estimatedCreditScore: "",
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
      isFirstTimeBuyer: formData.isFirstTimeBuyer as "yes" | "no" | undefined,
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
        <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
          <div className="container py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Ohio Down Payment Help" className="h-12 w-12" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Ohio Down Payment Help</h1>
                  <p className="text-xs text-gray-600">Geneva Financial LLC | NMLS #42056</p>
                </div>
              </div>
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
                <Link href="/programs" className="text-gray-700 hover:text-primary font-medium">Programs</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Want To Buy A House And Need Help With The Down Payment?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Discover How Easy It Is To Buy A Home In Ohio With Little Or No Money Down With Federal, State, Or Municipal Down Payment Programs For Ohio Homes.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto font-bold shadow-xl"
                onClick={() => document.getElementById("eligibility-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                SEE HOW MUCH I CAN GET
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h3 className="text-3xl font-bold text-center mb-12">Why Choose Down Payment Assistance Programs?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Low Down Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Buy with as little as 3.5% down or even $0 down for qualified buyers.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <HomeIcon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Grants Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Get up to $15,000+ in grants that don't have to be repaid.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Build Equity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Stop paying rent and start building wealth through homeownership.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Expert Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Geneva Financial guides you through every step of the process.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-16">
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
        <section id="eligibility-form" className="py-16 bg-gray-50">
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
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="John"
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
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          placeholder="Columbus"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">Zip Code</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange("zipCode", e.target.value)}
                          placeholder="43215"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="isFirstTimeBuyer">Are you a first-time homebuyer?</Label>
                      <Select value={formData.isFirstTimeBuyer} onValueChange={(value) => handleInputChange("isFirstTimeBuyer", value)}>
                        <SelectTrigger id="isFirstTimeBuyer">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="estimatedIncome">Estimated Household Income</Label>
                      <Select value={formData.estimatedIncome} onValueChange={(value) => handleInputChange("estimatedIncome", value)}>
                        <SelectTrigger id="estimatedIncome">
                          <SelectValue placeholder="Select range..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-40k">Under $40,000</SelectItem>
                          <SelectItem value="40k-60k">$40,000 - $60,000</SelectItem>
                          <SelectItem value="60k-80k">$60,000 - $80,000</SelectItem>
                          <SelectItem value="80k-100k">$80,000 - $100,000</SelectItem>
                          <SelectItem value="over-100k">Over $100,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="estimatedCreditScore">Estimated Credit Score Range</Label>
                      <Select value={formData.estimatedCreditScore} onValueChange={(value) => handleInputChange("estimatedCreditScore", value)}>
                        <SelectTrigger id="estimatedCreditScore">
                          <SelectValue placeholder="Select range..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-580">Under 580</SelectItem>
                          <SelectItem value="580-620">580 - 620</SelectItem>
                          <SelectItem value="620-680">620 - 680</SelectItem>
                          <SelectItem value="680-740">680 - 740</SelectItem>
                          <SelectItem value="over-740">Over 740</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                      <p className="text-sm text-blue-900 font-medium">✅ 100% Free - No Obligation</p>
                      <p className="text-sm text-blue-900">✅ Your information is secure and never shared</p>
                      <p className="text-sm text-blue-900">✅ Instant results via email</p>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg py-6 h-auto font-bold"
                      disabled={submitLead.isPending}
                    >
                      {submitLead.isPending ? "Submitting..." : "CHECK MY ELIGIBILITY (FREE)"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img src="/logo.png" alt="Ohio Down Payment Help" className="h-12 w-12" />
                <div className="text-left">
                  <p className="text-white font-bold">Geneva Financial LLC</p>
                  <p className="text-sm">NMLS #42056</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm">
                <span>⚖️</span>
                <span>Equal Housing Opportunity</span>
              </div>

              <div className="text-xs leading-relaxed text-gray-400 max-w-3xl mx-auto">
                <p className="mb-4">
                  © 2025 DownPaymentOH.org is for informational purposes only. No guarantee of accuracy is expressed or implied. 
                  Programs shown may not include all options or pricing structures. Rates, terms, programs and underwriting policies 
                  subject to change without notice. This is not an offer to extend credit or a commitment to lend. All loans subject 
                  to underwriting approval. Some products may not be available in all states and restrictions may apply. Equal Housing Opportunity.
                </p>
                <p>
                  By completing and submitting the form provided on this website, you expressly grant permission for Geneva Financial LLC 
                  to contact you through the information you've provided. This may include contact via email, phone call, or text message.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

