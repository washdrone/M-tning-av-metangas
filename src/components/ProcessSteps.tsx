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
    <section className="section-padding bg-gray-50">
      <div className="container-narrow">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">{heading}</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+24px)] top-5 hidden h-0.5 w-[calc(100%-48px)] bg-brand-200 lg:block" aria-hidden="true" />
              )}
              <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
