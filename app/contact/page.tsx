'use client'

import React from 'react'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Heart, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Get in Touch
            </h1>
            <p className="text-lg text-white/90 text-pretty">
              Have questions? Want to partner with us? Need more information? We'd love to hear from you. Reach out and let's work together to make a difference.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-border p-8 hover:border-primary transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-8 h-8 text-primary flex-shrink-0" />
                  <h3 className="text-lg font-bold text-foreground">Email</h3>
                </div>
                <p className="text-foreground/70 mb-2">Reach out to us anytime</p>
                <a href="mailto:hello@beaconcharity.org" className="text-primary font-semibold hover:opacity-80 transition">
                  hello@beaconcharity.org
                </a>
              </div>

              <div className="bg-white rounded-lg border border-border p-8 hover:border-primary transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-8 h-8 text-primary flex-shrink-0" />
                  <h3 className="text-lg font-bold text-foreground">Phone</h3>
                </div>
                <p className="text-foreground/70 mb-2">Call us during business hours</p>
                <a href="tel:+1-555-0123" className="text-primary font-semibold hover:opacity-80 transition">
                  +1 (555) 0123
                </a>
              </div>

              <div className="bg-white rounded-lg border border-border p-8 hover:border-primary transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                  <h3 className="text-lg font-bold text-foreground">Address</h3>
                </div>
                <p className="text-foreground/70 mb-2">Visit our main office</p>
                <p className="text-primary font-semibold">
                  456 Beacon Ave<br />
                  Global City, GC 10001
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Form */}
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
                  
                  {submitted && (
                    <div className="bg-secondary/20 border-l-4 border-secondary text-secondary px-6 py-4 rounded mb-6">
                      <p className="font-semibold">Thank you for your message!</p>
                      <p className="text-sm opacity-90">We'll get back to you as soon as possible.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 gap-2 h-12"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Follow Us</h3>
                <p className="text-foreground/80 mb-8">Connect with us on social media to stay updated on our latest projects and impact stories.</p>
                  
                <div className="space-y-4">
                  {[
                    { name: 'Facebook', handle: '@hopefoundation' },
                    { name: 'Twitter', handle: '@hopefdn' },
                    { name: 'Instagram', handle: '@hopefoundation' },
                    { name: 'LinkedIn', handle: 'Hope Foundation' }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className="block p-4 border border-border rounded-lg hover:bg-primary/5 transition hover:border-primary/50"
                    >
                      <p className="font-semibold text-foreground hover:text-primary transition">{social.name}</p>
                      <p className="text-sm text-foreground/60">{social.handle}</p>
                    </a>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 mt-8 border border-primary/20">
                  <Heart className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-bold text-foreground mb-2">Ready to Make an Impact?</h4>
                  <p className="text-sm text-foreground/80 mb-4">Your support can change lives.</p>
                  <button 
                    onClick={() => alert('Donation link would redirect to payment page')}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition text-sm"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: 'How is my donation used?',
                  a: 'We maintain strict financial standards. 95% of donations go directly to programs, with the remaining 5% covering essential operations. Detailed annual reports are available on our website.'
                },
                {
                  q: 'Can I get a tax receipt?',
                  a: 'Yes! Hope Foundation is a registered 501(c)(3) nonprofit. All donations are tax-deductible. You\'ll receive a receipt automatically via email.'
                },
                {
                  q: 'How can I volunteer?',
                  a: 'We have both in-person and remote volunteering opportunities. Visit our Volunteer page or contact us directly to discuss how you can help!'
                },
                {
                  q: 'Do you work with corporate partners?',
                  a: 'Absolutely! We partner with businesses through sponsorships, employee giving programs, and cause marketing. Contact our partnerships team for more information.'
                },
                {
                  q: 'How often should I hear back?',
                  a: 'We aim to respond to all inquiries within 2 business days. For urgent matters, please call us during business hours.'
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-lg p-6 md:p-8 border border-border hover:shadow-md transition">
                  <h3 className="font-bold text-lg text-foreground mb-3">{faq.q}</h3>
                  <p className="text-foreground/80 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
