interface FaqItem { question: string; answer: string }
interface FaqAccordionProps { items: FaqItem[]; heading?: string }

// Native disclosure controls work with keyboard, screen readers and without JavaScript.
export function FaqAccordion({ items, heading }: FaqAccordionProps) {
  return <section className="section-padding"><div className="container-narrow">
    {heading && <h2 className="mb-10 text-center text-2xl sm:text-3xl">{heading}</h2>}
    <div className="divide-y divide-slate-800">{items.map(item => <details key={item.question} className="py-4 sm:py-5">
      <summary className="cursor-pointer py-2 pr-4 text-base font-medium text-white focus-visible:outline focus-visible:outline-cyan-300">{item.question}</summary>
      <p className="pt-3 pr-4 sm:pr-12 text-sm leading-relaxed text-slate-300">{item.answer}</p>
    </details>)}</div>
  </div></section>
}
