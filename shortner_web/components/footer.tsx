import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/10 border-t pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/warpit-logo-new.png" alt="WarpIt" width={30} height={30} className="rounded-lg opacity-80" />
              <span className="text-xl font-black tracking-tight">WarpIt</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              The premier link management infrastructure for modern enterprises.
              Secure, fast, and engineered for the high-volume web.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-foreground/50">Infrastructure</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-primary transition-colors">Edge Network</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">API Documentation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">System Status</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Security Audit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-foreground/50">Ecosystem</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Developer Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Partner Network</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-foreground/50">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-primary transition-colors">About Engineering</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Policy Integrity</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Accessibility</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t flex flex-col md:row items-center justify-between gap-6  md:flex-row">
          <p className="text-xs text-muted-foreground/60 font-medium">
            © {new Date().getFullYear()} WarpIt High-Speed Systems. All technical rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground/40">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Data</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
