import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Chrome, Zap, Globe, Search, Star, ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
              <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
              <path d="M15 2v5h5" />
            </svg>
            <span className="text-xl font-bold">DeepSeek Sidebar</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </a>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-sm font-medium hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm font-medium hover:text-primary transition-colors">
              Terms
            </Link>
          </nav>
          <Button className="hidden md:flex">
            <Chrome className="mr-2 h-4 w-4" />
            Add to Chrome
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-small-slate-100/[0.05] bg-[center_top_-1px] dark:bg-grid-small-slate-700/[0.05]" />
          <div className="container relative flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-6 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Just launched on Chrome Web Store
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 animate-gradient">
              Instant DeepSeek AI Access Anywhere
            </h1>
            <p className="max-w-[42rem] text-muted-foreground text-xl mb-10 animate-fade-in-up">
              Access the power of DeepSeek AI on any website with just one click. Research, summarize, and create
              content without leaving your current page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-200">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 text-white"
              >
                <Chrome className="mr-2 h-5 w-5" />
                Add to Chrome
              </Button>
              <Button size="lg" variant="outline">
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative w-full max-w-5xl rounded-xl border bg-background shadow-xl animate-fade-in-up delay-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background border rounded-full px-4 py-1 text-xs font-medium">
                DeepSeek Sidebar in action
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=1080&width=1920"
                  alt="DeepSeek Sidebar Screenshot"
                  width={1920}
                  height={1080}
                  className="w-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Enhance your browsing experience with these powerful AI capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group bg-background rounded-xl border p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick AI Assistance</h3>
                <p className="text-muted-foreground">
                  Get instant AI help with writing, research, and problem-solving without switching tabs or
                  applications.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-background rounded-xl border p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Seamless Website Integration</h3>
                <p className="text-muted-foreground">
                  Works on any website with a clean, unobtrusive sidebar that appears only when you need it.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-background rounded-xl border p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Search & Summarization</h3>
                <p className="text-muted-foreground">
                  Quickly search for information or summarize long articles with DeepSeek's advanced AI capabilities.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group bg-background rounded-xl border p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Experience</h3>
                <p className="text-muted-foreground">
                  Customize the sidebar appearance and behavior to match your workflow and preferences.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group bg-background rounded-xl border p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Privacy Focused</h3>
                <p className="text-muted-foreground">
                  Your data stays private with secure, encrypted connections and no unnecessary data collection.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group bg-background rounded-xl border p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Contextual Understanding</h3>
                <p className="text-muted-foreground">
                  DeepSeek AI understands the content of your current page to provide more relevant assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join thousands of satisfied users who have transformed their browsing experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-background rounded-xl border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-500"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "DeepSeek Sidebar makes research effortless! I can quickly get information without switching between
                  tabs. It's become an essential tool for my daily work."
                </p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-primary font-medium">
                    JD
                  </div>
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-sm text-muted-foreground">Content Creator</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-background rounded-xl border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-500"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "As a developer, I'm constantly looking up documentation. DeepSeek Sidebar helps me understand complex
                  concepts quickly with its excellent summarization capabilities."
                </p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-primary font-medium">
                    MS
                  </div>
                  <div>
                    <p className="font-medium">Michael Smith</p>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-background rounded-xl border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-500"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "I use DeepSeek Sidebar for my academic research. It helps me analyze papers and extract key
                  information without having to read the entire document. A huge time-saver!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-primary font-medium">
                    AJ
                  </div>
                  <div>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-sm text-muted-foreground">PhD Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/20 to-blue-400/20">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Browsing Experience?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of users who have already enhanced their productivity with DeepSeek Sidebar.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 text-white"
            >
              <Chrome className="mr-2 h-5 w-5" />
              Add to Chrome — It's Free
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find answers to common questions about DeepSeek Sidebar
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is DeepSeek Sidebar free to use?</AccordionTrigger>
                  <AccordionContent>
                    Yes, DeepSeek Sidebar is free to install and use with basic features. We also offer a premium plan
                    with advanced capabilities for power users.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does DeepSeek Sidebar access the content of my current page?</AccordionTrigger>
                  <AccordionContent>
                    DeepSeek Sidebar only accesses the content of your current page when you explicitly activate it.
                    Your data is processed securely and is never stored or shared with third parties.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I customize the appearance of the sidebar?</AccordionTrigger>
                  <AccordionContent>
                    You can customize the sidebar's position, size, theme, and behavior through the extension settings
                    to match your preferences.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Does DeepSeek Sidebar work on all websites?</AccordionTrigger>
                  <AccordionContent>
                    DeepSeek Sidebar works on most websites. However, some websites with strict Content Security
                    Policies might restrict its functionality. We're constantly working to improve compatibility.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I get support if I encounter issues?</AccordionTrigger>
                  <AccordionContent>
                    You can reach our support team through the "Help" section in the extension settings or by emailing
                    support@deepseeksidebar.com. We typically respond within 24 hours.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-secondary py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
                  <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
                  <path d="M15 2v5h5" />
                </svg>
                <span className="text-xl font-bold">DeepSeek Sidebar</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Access the power of DeepSeek AI on any website with just one click. Research, summarize, and create
                content without leaving your current page.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} DeepSeek Sidebar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

