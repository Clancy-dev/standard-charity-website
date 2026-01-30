'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'
import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'How Education Changes Lives: A Success Story from Rural Communities',
    excerpt: 'Meet Priya, whose life was transformed by our education program. Read how access to quality education opened doors for her and her community.',
    date: 'March 10, 2025',
    author: 'Sarah Johnson',
    category: 'Education',
    image: '📚',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Clean Water Initiative: Reaching 10,000 People',
    excerpt: 'Our latest update on the clean water project. We\'re proud to announce that 10,000 people now have access to safe drinking water.',
    date: 'March 5, 2025',
    author: 'Michael Chen',
    category: 'Water',
    image: '💧',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Healthcare Reaches Remote Villages',
    excerpt: 'Our mobile healthcare units brought essential medical services to 15 remote villages, providing free checkups to over 2,000 people.',
    date: 'February 28, 2025',
    author: 'Lisa Wang',
    category: 'Healthcare',
    image: '🏥',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Youth Employment: 500 Jobs Created This Year',
    excerpt: 'Through our skill development programs, we\'ve helped 500 young adults secure meaningful employment. Learn about their journeys.',
    date: 'February 20, 2025',
    author: 'David Rodriguez',
    category: 'Employment',
    image: '💼',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'Environmental Impact: Planting 50,000 Trees',
    excerpt: 'Our environmental conservation efforts reached a milestone. We\'ve planted 50,000 trees across 20 communities, creating green spaces for future generations.',
    date: 'February 15, 2025',
    author: 'James Kamau',
    category: 'Environment',
    image: '🌱',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Volunteer Spotlight: Meet Our Amazing Supporters',
    excerpt: 'We spotlight our incredible volunteers who dedicate their time and energy to make a difference. Their stories will inspire you.',
    date: 'February 10, 2025',
    author: 'Amara Okonkwo',
    category: 'Community',
    image: '🤝',
    readTime: '4 min read',
  },
]

const categories = ['All', 'Education', 'Healthcare', 'Water', 'Employment', 'Environment', 'Community']

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Stories of Impact
            </h1>
            <p className="text-lg text-white/90 text-pretty">
              Read about the lives changed, communities transformed, and progress made through our charity work.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg border border-border overflow-hidden hover:border-primary transition-colors group"
                  >
                    {/* Image */}
                    <div className="h-40 bg-primary/10 flex items-center justify-center text-5xl overflow-hidden group-hover:scale-105 transition-transform">
                      {post.image}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-foreground/60">{post.readTime}</span>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-foreground/60">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-foreground/70 text-lg">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Stay Informed
            </h2>
            <p className="text-lg text-foreground/70">
              Get the latest stories of impact, updates, and news from Beacon Charity delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
