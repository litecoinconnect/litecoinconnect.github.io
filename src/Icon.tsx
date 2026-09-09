import type { ReactElement } from 'react'

/**
 * The icon set, drawn inline.
 *
 * An icon font or an icon package would be another dependency in the page that
 * hands people a wallet binary. These are a dozen paths; they can live here.
 */
export type IconName =
  | 'alert'
  | 'android'
  | 'apple'
  | 'arrow'
  | 'chart'
  | 'code'
  | 'copy'
  | 'database'
  | 'heart'
  | 'litecoin'
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
  android: (
    <path
      d="M17.6 9.48l1.84-3.18a.4.4 0 0 0-.7-.4l-1.86 3.23A11.4 11.4 0 0 0 12 8.2c-1.75 0-3.4.37-4.88 1.02L5.26 5.99a.4.4 0 1 0-.7.4L6.4 9.57A9.6 9.6 0 0 0 1.5 17h21a9.6 9.6 0 0 0-4.9-7.52ZM7 14.25a.94.94 0 1 1 0-1.87.94.94 0 0 1 0 1.87Zm10 0a.94.94 0 1 1 0-1.87.94.94 0 0 1 0 1.87Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  apple: (
    <path
      d="M16.37 12.65c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.1-2.02-3.77-2.05-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.81 3.15-.46 7.8 1.3 10.36.86 1.25 1.89 2.65 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.38.81 1.4-.02 2.28-1.27 3.13-2.53.99-1.45 1.4-2.85 1.42-2.92-.03-.01-2.72-1.05-2.75-4.14ZM13.9 5.03c.71-.87 1.2-2.07 1.06-3.27-1.03.04-2.27.69-3.01 1.55-.66.77-1.24 2-1.09 3.17 1.15.09 2.32-.58 3.04-1.45Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15v-4M12 15V7M17 15v-6" />
    </>
  ),
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
  copy: (
    <>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  heart: (
    <path
      d="M12 21s-7.5-4.7-9.3-9A5.2 5.2 0 0 1 12 6.6 5.2 5.2 0 0 1 21.3 12c-1.8 4.3-9.3 9-9.3 9Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  litecoin: (
    <path
      d="M12 1.4a10.6 10.6 0 1 0 0 21.2 10.6 10.6 0 0 0 0-21.2Zm.18 10.55-1.1 3.72h5.9a.3.3 0 0 1 .3.38l-.51 1.77a.4.4 0 0 1-.39.28H7.35l1.51-5.16-1.69.51.38-1.2 1.7-.51 2.12-7.23a.4.4 0 0 1 .39-.29h2.28a.3.3 0 0 1 .3.39l-1.79 6.1 1.69-.51-.36 1.23-1.7.52Z"
      fill="currentColor"
      stroke="none"
    />
  ),
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
