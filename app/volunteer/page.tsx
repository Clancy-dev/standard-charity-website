'use client'

import React from "react"

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Heart, Clock, MapPin, Briefcase, Award } from 'lucide-react'
import { useState } from 'react'

const volunteerOpportunities = [
  {
    id: 1,
    title: 'Teaching & Education',
    description: 'Help students with tutoring, mentorship, and educational support programs.',
    commitment: '4-8 hours/week',
    location: 'In-Person & Remote',
    skills: 'Teaching, mentoring, patience',
    icon: '📚',
  },
  {
    id: 2,
    title: 'Healthcare Support',
    description: 'Assist in health camps, patient care coordination, and health awareness initiatives.',
    commitment: '6-10 hours/week',
    location: 'In-Person',
    skills: 'Healthcare knowledge, compassion',
    icon: '🏥',
  },
  {
    id: 3,
    title: 'Community Outreach',
    description: 'Engage with communities, collect feedback, and build local partnerships.',
    commitment: '5-8 hours/week',
    location: 'In-Person',
    skills: 'Communication, problem-solving',
    icon: '🤝',
  },
  {
    id: 4,
    title: 'Content & Communications',
    description: 'Create content, manage social media, and help tell our impact stories.',
    commitment: '3-6 hours/week',
    location: 'Remote',
    skills: 'Writing, social media, design',
    icon: '✍️',
  },
  {
    id: 5,
    title: 'Administrative Support',
    description: 'Help with data entry, event planning, and general office coordination.',
    commitment: '4-6 hours/week',
    location: 'Remote & In-Person',
    skills: 'Organization, attention to detail',
    icon: '📋',
  },
  {
    id: 6,
    title: 'Environmental Initiatives',
    description: 'Participate in tree planting, community cleanup, and conservation projects.',
    commitment: '2-4 hours/week',
    location: 'In-Person',
    skills: 'Physical activity, environmental awareness',
    icon: '🌱',
  },
]

const volunteerStats = [
  { number: '5,000+', label: 'Active Volunteers' },
  { number: '500K+', label: 'Volunteer Hours' },
  { number: '50+', label: 'Programs' },
  { number: '100%', label: 'Impact-Driven' },
]

export default function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interests: [] as string[],
    experience: '',
    availability: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((item) => item !== value)
        : [...prev.interests, value],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Volunteer form submitted:', formData)
    setSubmitted(true)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interests: [],
      experience: '',
      availability: '',
      message: '',
    })
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
              Volunteer With Us
            </h1>
            <p className="text-lg text-white/90 text-pretty">
              Join thousands of passionate volunteers making a real difference in communities worldwide. Your time and skills can transform lives.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-12 px-8 gap-2" asChild>
              <a href="#signup">
                <Heart className="w-5 h-5" fill="currentColor" />
                Get Started
              </a>
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {volunteerStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-foreground/70 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Volunteer Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                Why <span className="text-primary">Volunteer</span> With Us?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Make Real Impact',
                  description: 'Your efforts directly help communities and individuals achieve their goals and improve their quality of life.',
                },
                {
                  icon: Award,
                  title: 'Gain Experience',
                  description: 'Develop new skills, build your portfolio, and gain valuable experience in meaningful work.',
                },
                {
                  icon: Briefcase,
                  title: 'Professional Growth',
                  description: 'Network with like-minded individuals and organizations in the nonprofit sector.',
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="bg-white rounded-lg border border-border p-8">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                Volunteer <span className="text-primary">Opportunities</span>
              </h2>
              <p className="text-lg text-foreground/70">Choose from diverse roles that match your skills and interests.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {volunteerOpportunities.map((opportunity) => (
                <div
                  key={opportunity.id}
                  className="bg-white rounded-lg border border-border p-8 hover:border-primary transition-colors"
                >
                  <div className="text-4xl mb-4">{opportunity.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{opportunity.title}</h3>
                  <p className="text-foreground/70 mb-6">{opportunity.description}</p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-foreground/70">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{opportunity.commitment}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/70">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/70">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>{opportunity.skills}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signup Form Section */}
        <section id="signup" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                Join Our Volunteer <span className="text-primary">Team</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Fill out this form to let us know about your interests and availability.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8 md:p-12">
              {submitted && (
                <div className="bg-primary/20 border-l-4 border-primary text-primary px-6 py-4 rounded mb-6">
                  <p className="font-semibold">Thank you for your interest!</p>
                  <p className="text-sm opacity-90">We'll review your application and contact you soon with next steps.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Areas of Interest *
                  </label>
                  <div className="space-y-2">
                    {['Teaching & Education', 'Healthcare', 'Community Outreach', 'Content & Communications', 'Administrative', 'Environmental'].map((interest) => (
                      <div key={interest} className="flex items-center gap-3">
                        <input
                          id={interest}
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="w-4 h-4 rounded border-border focus:ring-2 focus:ring-primary"
                        />
                        <label htmlFor={interest} className="text-foreground cursor-pointer">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-semibold text-foreground mb-2">
                    Weekly Availability *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select your availability</option>
                    <option value="2-4">2-4 hours</option>
                    <option value="4-6">4-6 hours</option>
                    <option value="6-8">6-8 hours</option>
                    <option value="8+">8+ hours</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-foreground mb-2">
                    Relevant Experience or Skills
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Tell us about your experience, skills, or certifications..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Anything else you'd like us to know?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 h-12 gap-2"
                >
                  <Heart className="w-5 h-5" fill="currentColor" />
                  Apply as Volunteer
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Questions About Volunteering?
            </h2>
            <p className="text-lg text-white/90">
              Our volunteer coordinator will be happy to answer any questions you may have.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-12 px-8" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
