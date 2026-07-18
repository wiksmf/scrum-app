import { Kanban, SquareStack, Wand2, ListChecks, ClipboardCheck, BarChart2, LucideIcon } from 'lucide-react'

import { features } from '@/lib/data/features'

const iconMap: Record<string, LucideIcon> = {
  Kanban,
  SquareStack,
  Wand2,
  ListChecks,
  ClipboardCheck,
  BarChart2,
}

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Everything your team needs</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From backlog to retrospective — ScrumAI covers the full sprint lifecycle with real-time collaboration and AI
            assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]

            if (!Icon) return null

            return (
              <div
                key={feature.title}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
