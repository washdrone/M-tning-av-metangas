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
        <div className={`mt-14 grid gap-8 sm:grid-cols-2 ${gridCols}`}>
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-brand-600/30 bg-brand-600/10 text-sm font-bold text-brand-400">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+28px)] top-[22px] hidden h-px w-[calc(100%-56px)] bg-gradient-to-r from-brand-600/30 to-transparent lg:block" aria-hidden="true" />
              )}
              <h3 className="mt-5 text-[15px] font-semibold text-white">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[22ch] text-sm leading-relaxed text-dark-400 sm:max-w-none">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
