import { useState } from 'react'
import {
  APK_SHA256,
  APK_SIZE,
  CERT_SHA1,
  CERT_SHA256,
  DEVELOPER,
  DONATION_ADDRESS,
  DOWNLOAD_URL,
  FEATURES,
  MIN_ANDROID,
  RELEASE_URL,
  REPO,
  TECHNOLOGIES,
  VERSION,
} from './data'
import { Icon, type IconName } from './Icon'

/** Copies text and reports back, so the button can confirm it happened. */
function useCopy() {
  const [copied, setCopied] = useState<string | null>(null)
  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key)
      window.setTimeout(() => setCopied(null), 1600)
    })
  }
  return { copied, copy }
}

/**
 * Assets resolved against the deployment's base path.
 *
 * A bare "/phones.webp" is correct on Vercel and a 404 on GitHub Pages, which
 * serves the site from a subdirectory. BASE_URL is whatever the build was told.
 */
const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`

const SHORT_ADDRESS = `${DONATION_ADDRESS.slice(0, 6)}…${DONATION_ADDRESS.slice(-4)}`

export default function App() {
  const { copied, copy } = useCopy()

  return (
    <div className="page">
      <header className="nav">
        <div className="shell nav-inner">
          <a className="wordmark" href="#top">
            LiteConnect
          </a>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#security">Security</a>
            <a href="#about">About</a>
            <a href={REPO} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
          <a className="btn btn-dark btn-sm" href={DOWNLOAD_URL}>
            Download
          </a>
        </div>
      </header>

      <main id="top">
        {/* ---- Hero ------------------------------------------------ */}
        <section className="hero">
          <div className="shell hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                <span>OPEN SOURCE</span>
                <i />
                <span>PRIVATE</span>
                <i />
                <span>BUILT FOR LITECOIN</span>
              </p>

              <h1>
                A simple <span className="keep">self-custody</span> Litecoin
                wallet.
              </h1>

              <p className="lede">
                Designed for clarity, speed, and security. LiteConnect puts you in
                control of your Litecoin — with a clean, modern experience.
              </p>

              <div className="hero-actions">
                <a className="btn btn-dark" href={REPO} target="_blank" rel="noreferrer">
                  <Icon name="github" />
                  View on GitHub
                </a>
                <a className="btn btn-soft" href={DOWNLOAD_URL}>
                  <Icon name="download" />
                  Download wallet
                </a>
              </div>

              <p className="fineprint">
                Free <i /> Open source <i /> Community driven
              </p>

              {/*
                Kept, and deliberately.
                The design that this page follows had nothing here, but anyone
                who takes that download button can put real money behind it, and
                this build has never carried any. A quiet line is the least a
                page can do; it is styled to belong rather than to shout.
              */}
              <p className="prerelease">
                <Icon name="alert" />
                <span>
                  <strong>Pre-release v{VERSION}.</strong> Never yet used with real
                  funds on mainnet — try it, audit it, but do not trust it with
                  more than you would be willing to lose.
                </span>
              </p>
            </div>

            <div className="hero-art">
              <img
                src={asset("phones.webp")}
                alt="LiteConnect running on two phones"
                width={1100}
                height={1073}
              />
            </div>
          </div>
        </section>

        {/* ---- Assurance strip ------------------------------------- */}
        <section className="shell strip">
          {(
            [
              ['shield', 'Self-custody', 'You control your keys.'],
              ['fingerprint', 'Biometric auth', 'Secure and convenient.'],
              ['database', 'Encrypted local storage', 'Your data stays on your device.'],
              ['code', 'Open-source', 'Transparent and community driven.'],
            ] as [IconName, string, string][]
          ).map(([icon, title, body]) => (
            <div className="strip-card" key={title}>
              <span className="chip">
                <Icon name={icon} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ---- Features -------------------------------------------- */}
        <section className="shell block" id="features">
          <h2>Features</h2>
          <p className="section-sub">Everything you need. Nothing you don't.</p>

          <div className="grid-4">
            {FEATURES.map((f) => (
              <article className="card feature" key={f.title}>
                <span className="chip">
                  <Icon name={f.icon as IconName} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---- Security + developer -------------------------------- */}
        <section className="shell two-col" id="security">
          <article className="card security">
            <span className="chip chip-lg">
              <Icon name="shield" />
            </span>
            <div>
              <h3>Security &amp; your freedom</h3>
              <p>
                LiteConnect is built on the principles of self-custody, privacy and
                transparency. Your keys, your coins, your control. We never store
                your funds, and everything is designed to run locally on your device
                with encryption and biometric protection.
              </p>
              <a className="btn btn-soft btn-sm" href="#verify">
                Learn more about our approach
                <Icon name="arrow" />
              </a>
            </div>
          </article>

          <article className="card developer" id="about">
            <h3 className="card-title">Meet the developer</h3>
            <div className="dev-grid">
              <div className="dev-main">
                <img className="avatar" src={asset("developer.webp")} alt={DEVELOPER.name} />
                <div className="dev-body">
                  <h4>{DEVELOPER.name}</h4>
                  <p className="muted">{DEVELOPER.role}</p>
                  <ul className="dev-links">
                    <li>
                      <a
                        href={`https://x.com/${DEVELOPER.x}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="mini">
                          <Icon name="x" />
                        </span>
                        @{DEVELOPER.x}
                      </a>
                    </li>
                    <li>
                      <a href={REPO} target="_blank" rel="noreferrer">
                        <span className="mini">
                          <Icon name="github" />
                        </span>
                        github.com/{DEVELOPER.github}
                      </a>
                    </li>
                    <li>
                      <button
                        className="linkish"
                        onClick={() => copy(DONATION_ADDRESS, 'ltc')}
                        title={DONATION_ADDRESS}
                      >
                        <span className="mini">
                          <Icon name="litecoin" />
                        </span>
                        {copied === 'ltc' ? 'Address copied' : SHORT_ADDRESS}
                        <Icon name="copy" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="dev-support">
                <button
                  className="btn btn-soft support"
                  onClick={() => copy(DONATION_ADDRESS, 'support')}
                >
                  <Icon name="heart" />
                  {copied === 'support' ? 'Address copied' : 'Support development'}
                </button>
                <p className="muted">
                  Open source, for a more private and free future.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* ---- Technologies ---------------------------------------- */}
        <section className="shell tech-row">
          <h2 className="tech-label">Technologies</h2>
          <div className="tags">
            {TECHNOLOGIES.map((t) => (
              <span className="tag" key={t.label}>
                <Icon name={t.icon as IconName} />
                {t.label}
              </span>
            ))}
          </div>
        </section>

        {/* ---- Verify ---------------------------------------------- */}
        <section className="shell block" id="verify">
          <h2>Verify what you download</h2>
          <p className="section-sub">
            A wallet is worth checking before you run it. Both values come from
            the file attached to the release.
          </p>

          <div className="card verify">
            {(
              [
                ['SHA-256 of the APK', APK_SHA256, 'apk'],
                ['Signing certificate, SHA-256', CERT_SHA256, 'cert'],
                ['Signing certificate, SHA-1', CERT_SHA1, 'cert1'],
              ] as [string, string, string][]
            ).map(([label, value, key]) => (
              <div className="verify-row" key={key}>
                <div>
                  <span className="label">{label}</span>
                  <code>{value}</code>
                </div>
                <button className="btn btn-soft btn-sm" onClick={() => copy(value, key)}>
                  {copied === key ? 'Copied' : 'Copy'}
                </button>
              </div>
            ))}
            <p className="verify-note">
              Check them with <code>sha256sum</code> and{' '}
              <code>apksigner verify --print-certs</code>. Every future release
              carries the same certificate. If one does not, it did not come from
              this project.
            </p>
          </div>
        </section>

        {/* ---- Closing bar ----------------------------------------- */}
        <section className="shell">
          <div className="cta">
            <span className="chip chip-sq">
              <Icon name="code" />
            </span>
            <div className="cta-copy">
              <h3>Explore the source code.</h3>
              <p>
                LiteConnect is open source and available on GitHub. Use it, inspect
                it, contribute, and help make Litecoin more accessible to everyone.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-dark" href={REPO} target="_blank" rel="noreferrer">
                <Icon name="github" />
                Open repository
              </a>
              <a className="btn btn-soft" href={DOWNLOAD_URL}>
                Get started
                <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell foot">
        <span className="wordmark">LiteConnect</span>
        <p className="muted">A more open and private Litecoin future.</p>
        <nav>
          <a href="#verify">Verify</a>
          <a href={`${REPO}/blob/main/LICENSE`} target="_blank" rel="noreferrer">
            Licence
          </a>
          <a href={RELEASE_URL} target="_blank" rel="noreferrer">
            Releases
          </a>
          <a href={REPO} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
        <a className="foot-mark" href={REPO} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Icon name="github" />
        </a>
      </footer>

      <p className="shell legalese">
        {APK_SIZE} &middot; {MIN_ANDROID} or later &middot; MIT licence &middot; not
        affiliated with the Litecoin Foundation. Device renders; the balances
        shown in them are illustrative.
      </p>
    </div>
  )
}
