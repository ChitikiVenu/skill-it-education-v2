'use client';

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="simple-hero"><div className="section"><div className="eyebrow">TEMPORARY ERROR</div><h1>Something interrupted the learning path.</h1><p>Please try again. If the problem continues, contact Institute 9.</p><button className="primary-button" onClick={() => reset()}>Try again →</button></div></main>;
}
