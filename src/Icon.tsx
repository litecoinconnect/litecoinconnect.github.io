import type { ReactElement } from 'react'

/**
 * The icon set, drawn inline.
 *
 * An icon font or an icon package would be another dependency in the page that
 * hands people a wallet binary. These are a dozen paths; they can live here.
 */
export type IconName =
  | 'alert'
  | 'arrow'
  | 'chart'
  | 'code'
  | 'download'
  | 'fingerprint'
  | 'github'
  | 'key'
  | 'layers'
  | 'lock'
  | 'send'
  | 'shield'
  | 'x'

const PATHS: Record<IconName, ReactElement> = {
  alert: (
    <>
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15v-4M12 15V7M17 15v-6" />
    </>
  ),
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
  download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />,
  fingerprint: (
    <>
      <path d="M12 10a2 2 0 0 0-2 2c0 1.1.1 2.9-.6 4.6" />
      <path d="M16 12a4 4 0 0 0-8 0c0 2.5-.3 4.5-1 6" />
      <path d="M20 12a8 8 0 0 0-16 0c0 1.4-.2 2.7-.5 4" />
      <path d="M14 12c0 3.5-.4 6-1.2 8" />
    </>
  ),
  github: (
    <path
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  key: (
    <>
      <circle cx="7.5" cy="15.5" r="4.5" />
      <path d="m10.7 12.3 8.3-8.3M17 6l2.5 2.5M14.5 8.5 17 11" />
    </>
  ),
  layers: <path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5" />,
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 1 1 8 0v3" />
    </>
  ),
  send: <path d="M7 17 17 7M7 7h10v10" />,
  shield: <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" />,
  x: (
    <path
      d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24H16.17l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z"
      fill="currentColor"
      stroke="none"
    />
  ),
}

export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}
