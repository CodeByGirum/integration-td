import Link from "next/link"
import { UserCircle2 } from "lucide-react"

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-panel-border/40 bg-page-base/95 backdrop-blur supports-[backdrop-filter]:bg-page-base/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold text-text-header">
            Sweepo
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#" className="text-text-tertiary hover:text-text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="#" className="text-text-tertiary hover:text-text-primary transition-colors">
              Projects
            </Link>
            <Link href="#" className="text-text-tertiary hover:text-text-primary transition-colors">
              Analytics
            </Link>
            <Link href="/integrations" className="text-text-primary">
              Integrations
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#" className="text-text-tertiary hover:text-text-primary transition-colors">
            How it works
          </Link>
          <Link href="#" className="text-text-tertiary hover:text-text-primary transition-colors">
            About Us
          </Link>
          <Link href="#" className="text-text-tertiary hover:text-text-primary transition-colors">
            Contact Us
          </Link>
          <Link href="#" className="flex items-center text-text-tertiary hover:text-text-primary transition-colors">
            Sign In
            <UserCircle2 className="ml-2 h-5 w-5" />
          </Link>
        </div>
        {/* Mobile Menu Button (optional) */}
      </div>
    </header>
  )
}

export default AppHeader
