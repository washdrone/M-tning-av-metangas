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
        <h2 className="text-center font-display text-2xl font-bold text-skiffer sm:text-3xl">{heading}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="border border-mossa bg-white p-5" style={{ borderRadius: '8px' }}>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-dimma">
                  <svg className="h-3.5 w-3.5 text-feltsten" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-skiffer">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-aska">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
