import Link from 'next/link'
import Image from 'next/image'

import { links } from '@/lib/data/footer'

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image src="/logo-scrum-app.svg" alt="ScrumAI logo" width={28} height={28} />
              <span className="font-semibold text-foreground">ScrumAI</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xs text-balance">
              AI-powered scrum planning for teams who want to ship faster and stress less.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} ScrumAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
