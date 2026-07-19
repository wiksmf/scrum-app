import { Check } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { plans } from '@/lib/data/pricing'

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when your team is ready. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              data-testid={`plan-${plan.name.toLowerCase()}`}
              className={`rounded-xl p-8 border flex flex-col ${
                plan.highlighted
                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                  : 'border-border bg-background'
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Most popular</div>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">/ {plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>

              {/* Features list */}
              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button className="w-full" variant={plan.highlighted ? 'default' : 'outline'}>
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
