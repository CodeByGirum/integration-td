import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

const AppFooter = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t border-panel-border bg-page-base">
      <div className="container mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="text-2xl font-bold text-text-header">
              Sweepo
            </Link>
            <p className="mt-4 max-w-xs text-sm text-text-tertiary">
              Powerful data cleaning and analysis tools to transform your workflow.
            </p>
            <div className="mt-8 flex space-x-4">
              <Link href="#" className="text-text-tertiary hover:text-text-primary">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-text-tertiary hover:text-text-primary">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-text-tertiary hover:text-text-primary">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-text-tertiary hover:text-text-primary">
                <Github size={20} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-text-primary">Product</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link href="#" className="text-text-tertiary hover:text-text-primary">
                  Features
                </Link>
                <Link href="#" className="text-text-tertiary hover:text-text-primary">
                  Pricing
                </Link>
                <Link href="/integrations" className="text-text-tertiary hover:text-text-primary">
                  Integrations
                </Link>
                <Link href="#" className="text-text-tertiary hover:text-text-primary">
                  Changelog
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-semibold text-text-primary">Resources</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link href="#" className="text-text-tertiary hover:text-text-primary">
                  Documentation
                </Link>
                <Link href="#" className="text-text-tertiary hover:text-text-primary">
                  Tutorials
                </Link>
                <Link href="#" className="text-text-tertiary hover:text-text-primary">
                  Blog
                </Link>
                <Link href="#" className="text-text-tertiary hover:text-text-primary">
                  Support
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-semibold text-text-primary">Company</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link href="#" className="text-text-tertiary hover:text-text-primary">
                  About Us
                </Link>
                <Link href="#" className="text-text-tertiary hover:text-text-primary">
                  Careers
                </Link>
                <Link href="#" className="text-text-tertiary hover:text-text-primary">
                  Contact Us
                </Link>
                <Link href="#" className="text-text-tertiary hover:text-text-primary">
                  Legal
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-panel-border pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-text-tertiary">
          <p>&copy; {currentYear} Sweepo. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-text-primary">
              Terms
            </Link>
            <Link href="#" className="hover:text-text-primary">
              Privacy
            </Link>
            <Link href="#" className="hover:text-text-primary">
              Cookies
            </Link>
            <Link href="#" className="hover:text-text-primary">
              Help
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
