interface LastUpdatedProps {
  datePublished: string
  dateModified: string
}

function formatDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function LastUpdated({ datePublished, dateModified }: LastUpdatedProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
      <svg className="h-4 w-4 text-slate-500" width={16} height={16} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <time dateTime={datePublished}>Publicerad {formatDate(datePublished)}</time>
      {dateModified !== datePublished && (
        <>
          <span className="text-slate-600">·</span>
          <time dateTime={dateModified}>Uppdaterad {formatDate(dateModified)}</time>
        </>
      )}
    </span>
  )
}
