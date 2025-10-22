import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Programs() {
  return (
    <>
      <Helmet>
        <title>Down Payment Assistance Programs in Ohio | Geneva Financial</title>
        <meta name="description" content="Complete guide to Ohio down payment assistance programs: FHA, VA, USDA, and OHFA programs. Find the right program for your situation." />
        <meta name="keywords" content="ohio down payment programs, fha loans ohio, va loans ohio, usda loans ohio, ohfa grants, first time home buyer ohio" />
        <link rel="canonical" href="https://ohiodownpaymenthelp.com/programs" />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
          <div className="container py-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <div className="flex items-center gap-3 cursor-pointer">
                  <img src="/logo.png" alt="Ohio Down Payment Help" className="h-12 w-12" />
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">Ohio Down Payment Help</h1>
                    <p className="text-xs text-gray-600">Geneva Financial LLC | NMLS #42056</p>
                  </div>
                </div>
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
                <Link href="/programs" className="text-primary font-medium">Programs</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-[oklch(0.60_0.16_175)] to-secondary text-white py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Down Payment Assistance Programs</h2>
              <p className="text-xl text-white/90">
                Explore all available programs for qualified Ohio homebuyers. Find the one that's right for you.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Detail */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="space-y-12">
              {/* FHA Loans */}
              <Card className="overflow-hidden">
                <div className="bg-primary/5 px-6 py-4 border-b">
                  <CardTitle className="text-2xl">FHA Loans</CardTitle>
                  <CardDescription className="text-base mt-1">As low as 3.5% down for qualified buyers</CardDescription>
                </div>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>Down payment as low as 3.5% for qualified buyers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>Credit scores as low as 580 accepted</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>Can be combined with down payment assistance programs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>Available statewide in Ohio</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Who Qualifies?</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• First-time and repeat buyers</li>
                        <li>• Must be primary residence</li>
                        <li>• Debt-to-income ratio typically under 43%</li>
                        <li>• Steady employment history</li>
                        <li>• Subject to credit approval</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <Link href="/#eligibility-form">
                      <Button className="gap-2">
                        Check Your Eligibility <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* VA Loans */}
              <Card className="overflow-hidden">
                <div className="bg-primary/5 px-6 py-4 border-b">
                  <CardTitle className="text-2xl">VA Loans</CardTitle>
                  <CardDescription className="text-base mt-1">$0 down for eligible veterans and active military</CardDescription>
                </div>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>$0 down payment required</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>No mortgage insurance (PMI) required</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>Competitive interest rates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>Can be used multiple times</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Who Qualifies?</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Active duty military members</li>
                        <li>• Veterans with honorable discharge</li>
                        <li>• National Guard and Reserve members (6+ years)</li>
                        <li>• Surviving spouses of veterans</li>
                        <li>• Must obtain Certificate of Eligibility (COE)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <Link href="/#eligibility-form">
                      <Button className="gap-2">
                        Check Your Eligibility <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* USDA Loans */}
              <Card className="overflow-hidden">
                <div className="bg-primary/5 px-6 py-4 border-b">
                  <CardTitle className="text-2xl">USDA Loans</CardTitle>
                  <CardDescription className="text-base mt-1">$0 down for qualified rural and suburban buyers</CardDescription>
                </div>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>$0 down payment required</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>Low mortgage insurance rates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>Many suburban areas qualify</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>Competitive interest rates</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Who Qualifies?</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Property must be in eligible rural area</li>
                        <li>• Income limits apply (varies by county)</li>
                        <li>• Must be primary residence</li>
                        <li>• Credit score typically 640+</li>
                        <li>• Many areas around Columbus, Cleveland, Cincinnati qualify</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <Link href="/#eligibility-form">
                      <Button className="gap-2">
                        Check Your Eligibility <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* OHFA Programs */}
              <Card className="overflow-hidden">
                <div className="bg-primary/5 px-6 py-4 border-b">
                  <CardTitle className="text-2xl">OHFA Programs</CardTitle>
                  <CardDescription className="text-base mt-1">Grants up to $15,000+ for eligible Ohio buyers</CardDescription>
                </div>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>Grants up to $15,000 or more</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>No repayment required if you stay 5 years</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>Can be combined with FHA, VA, or conventional loans</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={20} />
                          <span>Helps with down payment and closing costs</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Who Qualifies?</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• First-time homebuyers (typically)</li>
                        <li>• Income limits apply (often $80K-$100K+)</li>
                        <li>• Credit score requirements vary</li>
                        <li>• Must complete homebuyer education</li>
                        <li>• Limited funding - first come, first served</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t bg-yellow-50 -mx-6 -mb-6 px-6 py-4">
                    <p className="text-sm text-yellow-900 font-medium mb-3">
                      ⚠️ <strong>Limited Funding Available:</strong> OHFA programs have limited funding and are first-come, first-served. Don't wait!
                    </p>
                    <Link href="/#eligibility-form">
                      <Button className="gap-2">
                        Check Your Eligibility Now <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary via-[oklch(0.60_0.16_175)] to-secondary text-white">
          <div className="container text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Check your eligibility for these programs in just 2 minutes. It's free, with no obligation.
            </p>
            <Link href="/#eligibility-form">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 h-auto font-bold shadow-xl">
                CHECK YOUR ELIGIBILITY (FREE)
              </Button>
            </Link>
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

