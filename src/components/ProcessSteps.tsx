interface Step {
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: Step[]
  heading?: string
}

export function ProcessSteps({ steps, heading = 'Så går det till' }: ProcessStepsProps) {
  const gridCols = steps.length <= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-5'

  return (
    <section className="section-padding section-darker">
      <div className="container-narrow">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">{heading}</h2>
        {/* Mobile: vertical timeline */}
        <div className="mt-10 space-y-0 sm:hidden">
          {steps.map((step, i) => (
            <div key={i} className="relative flex gap-4 pb-8 last:pb-0">
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[21px] top-[44px] bottom-0 w-px bg-gradient-to-b from-cyan-500/30 to-transparent" aria-hidden="true" />
              )}
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm font-bold text-cyan-400">
                {i + 1}
              </div>
              <div className="pt-2">
                <h3 className="text-[15px] font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Desktop/tablet: horizontal grid */}
        <div className={`mt-14 hidden sm:grid gap-8 sm:grid-cols-2 ${gridCols}`}>
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm font-bold text-cyan-400">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+28px)] top-[22px] hidden h-px w-[calc(100%-56px)] bg-gradient-to-r from-cyan-500/30 to-transparent lg:block" aria-hidden="true" />
              )}
              <h3 className="mt-5 text-[15px] font-semibold text-white">{step.title}</h3>
              <p className="mx-auto mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
