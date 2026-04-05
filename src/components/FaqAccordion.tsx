'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  heading?: string
}

function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  const measure = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure, item.answer])

  return (
    <div className="py-4 sm:py-5">
      <dt>
        <button
          onClick={onToggle}
          className="flex w-full items-start justify-between text-left py-1"
          aria-expanded={isOpen}
        >
          <span className="text-[15px] font-medium text-white pr-4">{item.question}</span>
          <span className="mt-0.5 flex-shrink-0">
            <svg
              className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              width={20}
              height={20}
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
      <div
        className="overflow-hidden transition-[height,opacity] duration-300 ease-in-out"
        style={{ height: isOpen ? height : 0, opacity: isOpen ? 1 : 0 }}
      >
        <dd ref={contentRef} className="pt-3 pr-4 sm:pr-12 text-sm leading-relaxed text-slate-400">
          {item.answer}
        </dd>
      </div>
    </div>
  )
}

export function FaqAccordion({ items, heading }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding">
      <div className="container-narrow">
        {heading && (
          <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">{heading}</h2>
        )}
        <dl className="divide-y divide-slate-800">
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </dl>
      </div>
    </section>
  )
}
