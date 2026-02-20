interface Deliverable {
  title: string
  description: string
}

interface DeliverablesListProps {
  items: Deliverable[]
  heading?: string
}

export function DeliverablesList({ items, heading = 'Vad du får' }: DeliverablesListProps) {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">{heading}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="rounded-lg border border-gray-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
