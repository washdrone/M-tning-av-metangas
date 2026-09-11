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
    <section className="section-padding section-muted">
      <div className="container-narrow">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">{heading}</h2>
        <ol className={`mt-10 flex flex-col lg:mt-14 lg:grid lg:gap-8 ${gridCols}`}>
          {steps.map((step, i) => (
            <li key={i} className="relative flex gap-4 pb-8 last:pb-0 lg:pb-0 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
              {/* Vertical connector (mobile + tablet) */}
              {i < steps.length - 1 && (
                <div className="absolute left-[21px] top-[44px] bottom-0 w-px bg-gradient-to-b from-cyan-500/30 to-transparent lg:hidden" aria-hidden="true" />
              )}
              {/* Horizontal connector (desktop) */}
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+28px)] top-[22px] hidden h-px w-[calc(100%-56px)] bg-gradient-to-r from-cyan-500/30 to-transparent lg:block" aria-hidden="true" />
              )}
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-teal-200 bg-teal-50 text-sm font-bold text-teal-800 lg:mx-auto">
                {i + 1}
              </div>
              <div className="pt-2 lg:pt-0">
                <h3 className="text-[15px] font-semibold text-slate-900 lg:mt-5">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 lg:mx-auto lg:mt-2">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
