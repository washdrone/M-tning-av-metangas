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
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">{heading}</h2>
        )}
        <dl className="divide-y divide-gray-200">
          {items.map((item, i) => (
            <div key={i} className="py-4">
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-start justify-between text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-base font-medium text-gray-900">{item.question}</span>
                  <span className="ml-4 flex-shrink-0">
                    <svg
                      className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
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
                <dd className="mt-3 pr-12 text-sm leading-relaxed text-gray-600">
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
