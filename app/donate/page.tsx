'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Heart, Copy, Check, Smartphone, Building2, Gift } from 'lucide-react';
import { useState } from 'react';

export default function DonatePage() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, itemId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(itemId);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const donationMethods = [
    {
      id: 'bank',
      icon: Building2,
      title: 'Bank Transfer',
      description: 'Direct transfer to our charity account',
      details: [
        { label: 'Bank Name', value: 'Global Charity Bank' },
        { label: 'Account Holder', value: 'Hope Foundation' },
        { label: 'Account Number', value: '1234567890' },
        { label: 'SWIFT Code', value: 'GCBKUS33' },
        { label: 'Routing Number', value: '021000021' }
      ]
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile Money',
      description: 'Send donations via mobile payment services',
      details: [
        { label: 'MTN Mobile Money', value: '+1-555-123-4567' },
        { label: 'Airtel Money', value: '+1-555-234-5678' },
        { label: 'M-Pesa', value: '+1-555-345-6789' }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Support Our <span className="text-primary">Mission</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Your generous donation helps us create lasting change in communities around the world.
            </p>
          </div>
        </section>

        {/* Donation Methods */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">How to Donate</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Choose your preferred payment method below. All donations are secure and tax-deductible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {donationMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div key={method.id} className="bg-white rounded-lg border border-border shadow-sm hover:shadow-lg transition p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{method.title}</h3>
                        <p className="text-sm text-foreground/60">{method.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {method.details.map((detail, idx) => (
                        <div key={idx} className="bg-muted/40 rounded-lg p-4 flex items-center justify-between group">
                          <div>
                            <p className="text-sm text-foreground/60 mb-1">{detail.label}</p>
                            <p className="text-lg font-mono font-semibold text-foreground break-all">{detail.value}</p>
                          </div>
                          <button
                            onClick={() => copyToClipboard(detail.value, `${method.id}-${idx}`)}
                            className="ml-4 flex-shrink-0 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition"
                            title="Copy to clipboard"
                          >
                            {copiedItem === `${method.id}-${idx}` ? (
                              <Check className="w-5 h-5 text-primary" />
                            ) : (
                              <Copy className="w-5 h-5 text-primary" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Donation Proof Section */}
        <section className="bg-muted/20 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg border border-border p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                  <Gift className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">After You Donate</h3>
                  <p className="text-foreground/70">
                    Help us confirm your generous contribution
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-foreground mb-1">Step 1: Send Your Donation</p>
                  <p className="text-foreground/70 text-sm">
                    Use the bank transfer or mobile money details above to send your donation.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-4 py-2">
                  <p className="font-semibold text-foreground mb-1">Step 2: Email Your Proof</p>
                  <p className="text-foreground/70 text-sm">
                    Send a screenshot or photo of your payment receipt to <span className="font-mono bg-muted px-2 py-1 rounded text-primary">info@hopefoundation.org</span>
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-semibold text-foreground mb-1">Step 3: Receive Confirmation</p>
                  <p className="text-foreground/70 text-sm">
                    We'll send you a tax-deductible receipt and impact update within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Your Impact</h2>
              <p className="text-lg text-foreground/70">See how different donation amounts create change</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { amount: '$10', impact: 'Provides 2 meals for a child' },
                { amount: '$25', impact: 'Supplies school materials for 5 students' },
                { amount: '$100', impact: 'Provides clean water for a family for a month' },
                { amount: '$500', impact: 'Funds 2 medical check-ups in rural areas' }
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 md:p-8 text-center border border-border hover:shadow-md transition">
                  <div className="text-4xl font-bold text-primary mb-3">{item.amount}</div>
                  <p className="text-foreground font-medium text-balance">{item.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Questions About Donating?</h2>
            <p className="text-lg opacity-90">
              Our team is here to help. Reach out to us anytime.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 gap-2 h-12 px-8 text-base"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
