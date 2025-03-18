import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
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
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/terms" className="text-sm font-medium hover:text-primary transition-colors">
              Terms
            </Link>
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <p className="mb-6">
              At Sidebar for DeepSeek, we take your privacy seriously. This Privacy Policy explains how we handle your
              information when you use our Chrome extension.
            </p>

            <h2 className="text-xl font-semibold mb-4">Information We Don't Collect</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Personal identification information</li>
              <li>Browsing history or patterns</li>
              <li>Chat conversations or prompts</li>
              <li>Authentication credentials</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">How the Extension Works</h2>
            <p className="mb-6">
              Our extension simply provides an interface to access DeepSeek. All communication happens directly between
              your browser and DeepSeek's servers. We don't intercept, store, or process any of your data.
            </p>

            <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-6">
              The only third-party service our extension interacts with is DeepSeek. Your use of DeepSeek is
              governed by privacy policy and terms of service.
            </p>

            <h2 className="text-xl font-semibold mb-4">Updates to Privacy Policy</h2>
            <p className="mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new
              privacy policy on this page.
            </p>

            <div className="bg-secondary p-6 rounded-lg mt-8">
              <h3 className="text-lg font-medium mb-2">Last Updated</h3>
              <p>March 16, 2025</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-6">
        <div className="container text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/privacy-policy" className="text-primary font-medium">
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DeepSeek Sidebar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

