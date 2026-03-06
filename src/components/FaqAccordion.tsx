'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  heading?: string
}

export function FaqAccordion({ items, heading }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding">
      <div className="container-narrow">
        {heading && (
          <h2 className="mb-10 text-center font-display text-2xl font-bold text-skiffer sm:text-3xl">{heading}</h2>
        )}
        <dl className="divide-y divide-mossa">
          {items.map((item, i) => (
            <div key={i} className="py-5">
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-start justify-between text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-[15px] font-medium text-kol pr-4">{item.question}</span>
                  <span className="flex-shrink-0">
                    <svg
                      className={`h-5 w-5 text-aska transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>
              </dt>
              {openIndex === i && (
                <dd className="mt-3 pr-12 text-sm leading-relaxed text-aska">
                  {item.answer}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
