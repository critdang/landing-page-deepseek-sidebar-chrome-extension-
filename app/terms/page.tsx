import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Terms() {
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
            <Link href="/privacy-policy" className="text-sm font-medium hover:text-primary transition-colors">
              Privacy
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
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <div className="h-1 w-20 bg-primary rounded"></div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By installing and using the Sidebar for DeepSeek extension ("Extension"), you agree to be bound by these
              Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use the Extension.
            </p>

            <h2 className="text-xl font-semibold mb-4">2. License and Usage</h2>
            <p className="mb-6">
              We grant you a limited, non-exclusive, non-transferable license to use the Extension for personal or
              business purposes in accordance with these terms. This license is subject to your compliance with these
              Terms of Use.
            </p>

            <h2 className="text-xl font-semibold mb-4">3. User Obligations</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use the Extension in compliance with all applicable laws and regulations</li>
              <li>Not attempt to reverse engineer or modify the Extension</li>
              <li>Not use the Extension for any illegal or unauthorized purpose</li>
              <li>Not interfere with the proper working of the Extension</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="mb-6">
              The Extension, including all content, features, and functionality, is owned by us and is protected by
              international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
            <p className="mb-6">
              The Extension is provided "as is" and "as available" without any warranties of any kind, either express or
              implied. We do not warrant that the Extension will be uninterrupted or error-free.
            </p>

            <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="mb-6">
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or relating to your use of the Extension.
            </p>

            <h2 className="text-xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by
              posting the new terms on this page.
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
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-primary font-medium">
              Terms
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

