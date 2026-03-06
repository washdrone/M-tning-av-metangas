interface Step {
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: Step[]
  heading?: string
}

export function ProcessSteps({ steps, heading = 'Så går det till' }: ProcessStepsProps) {
  return (
    <section className="py-20 sm:py-28 bg-dimma border-t border-mossa">
      <div className="container-narrow">
        <h2 className="text-center font-display text-2xl font-bold text-skiffer sm:text-3xl">{heading}</h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-mossa bg-white text-sm font-bold text-skiffer" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+28px)] top-[22px] hidden h-px w-[calc(100%-56px)] bg-mossa lg:block" aria-hidden="true" />
              )}
              <h3 className="mt-5 font-display text-[15px] font-bold text-skiffer">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-aska">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
