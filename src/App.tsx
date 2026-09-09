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

export default function App() {
  const { copied, copy } = useCopy()

  return (
    <>
      <header className="nav">
        <div className="shell nav-inner">
          <a className="wordmark" href="#top">
            LiteConnect
          </a>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#verify">Verify</a>
            <a href="#developer">Developer</a>
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
        <section className="shell hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span>OPEN SOURCE</span>
              <i />
              <span>SELF-CUSTODY</span>
              <i />
              <span>BUILT FOR LITECOIN</span>
            </p>

            <h1>
              A simple <span className="keep">self-custody</span>
              <br />
              Litecoin wallet.
            </h1>

            <p className="lede">
              Your keys are generated on your phone and stay there. LiteConnect is
              free, open source, and does not hold anything of yours.
            </p>

            {/*
              The warning sits above the download button, not below it in small
              print. Anyone who installs this can put real money in it, and the
              one thing they need before deciding is the thing a landing page is
              least inclined to say.
            */}
            <div className="notice">
              <Icon name="alert" />
              <p>
                <strong>Pre-release.</strong> This build has never been used with
                real funds on mainnet. Try it, read it, audit it — but do not put
                in more than you would be willing to lose.
              </p>
            </div>

            <div className="hero-actions">
              <a className="btn btn-dark" href={DOWNLOAD_URL}>
                <Icon name="download" />
                Download for Android
              </a>
              <a className="btn btn-ghost" href={REPO} target="_blank" rel="noreferrer">
                <Icon name="github" />
                View on GitHub
              </a>
            </div>

            <p className="fineprint">
              v{VERSION} &middot; {APK_SIZE} &middot; {MIN_ANDROID} or later &middot;{' '}
              <a href={RELEASE_URL} target="_blank" rel="noreferrer">
                release notes
              </a>
            </p>
          </div>

          {/* Real screenshots of the running app, not rendered mock-ups. */}
          <div className="hero-shots" aria-hidden="true">
            <div className="phone phone-back">
              <img src="/shots/accounts.png" alt="" />
            </div>
            <div className="phone phone-front">
              <img src="/shots/dashboard.png" alt="" />
            </div>
          </div>
        </section>

        {/* ---- Assurances ------------------------------------------ */}
        <section className="shell strip">
          {(
            [
              ['shield', 'Self-custody', 'You hold the only copy of your keys.'],
              ['fingerprint', 'Biometric unlock', 'PIN or fingerprint, your choice.'],
              ['lock', 'Encrypted storage', 'Sealed by the Android Keystore.'],
              ['code', 'Open source', 'Every line is readable on GitHub.'],
            ] as [IconName, string, string][]
          ).map(([icon, title, body]) => (
            <div className="strip-card" key={title}>
              <span className="chip-icon">
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
          <p className="section-sub">What the wallet actually does today.</p>

          <div className="grid-4">
            {FEATURES.map((f) => (
              <article className="card" key={f.title}>
                <span className="chip-icon">
                  <Icon name={f.icon as IconName} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---- Verify ---------------------------------------------- */}
        <section className="shell block" id="verify">
          <h2>Verify what you download</h2>
          <p className="section-sub">
            A wallet is worth checking before you run it. Both values below come
            from the file attached to the release.
          </p>

          <div className="verify">
            <div className="verify-row">
              <div>
                <span className="label">SHA-256 of the APK</span>
                <code>{APK_SHA256}</code>
              </div>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => copy(APK_SHA256, 'apk')}
              >
                {copied === 'apk' ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="verify-row">
              <div>
                <span className="label">Signing certificate, SHA-256</span>
                <code>{CERT_SHA256}</code>
              </div>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => copy(CERT_SHA256, 'cert')}
              >
                {copied === 'cert' ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="verify-row">
              <div>
                <span className="label">Signing certificate, SHA-1</span>
                <code>{CERT_SHA1}</code>
              </div>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => copy(CERT_SHA1, 'cert1')}
              >
                {copied === 'cert1' ? 'Copied' : 'Copy'}
              </button>
            </div>

            <p className="verify-note">
              Check them with <code>sha256sum</code> and{' '}
              <code>apksigner verify --print-certs</code>. Every future release
              carries the same certificate. If one does not, it did not come from
              this project.
            </p>
          </div>
        </section>

        {/* ---- Developer ------------------------------------------- */}
        <section className="shell block" id="developer">
          <div className="two-col">
            <article className="card card-lg">
              <h2 className="card-title">Security and your freedom</h2>
              <p>
                LiteConnect is non-custodial. The recovery phrase is generated on
                your device and stored under a key that never leaves it, so
                nobody — including whoever wrote this — can move your coins or
                restore them for you.
              </p>
              <p>
                That is the trade. Write the twenty-four words down and keep them
                somewhere safe, because they are the only way back in.
              </p>
              <a className="btn btn-ghost btn-sm" href={REPO} target="_blank" rel="noreferrer">
                Read the source
                <Icon name="arrow" />
              </a>
            </article>

            <article className="card card-lg">
              <h2 className="card-title">Meet the developer</h2>
              <div className="dev">
                <img className="avatar" src="/developer.webp" alt={DEVELOPER.name} />
                <div>
                  <h3>{DEVELOPER.name}</h3>
                  <p className="muted">{DEVELOPER.role}</p>
                </div>
              </div>

              <ul className="dev-links">
                <li>
                  <a href={`https://x.com/${DEVELOPER.x}`} target="_blank" rel="noreferrer">
                    <Icon name="x" />@{DEVELOPER.x}
                  </a>
                </li>
                <li>
                  <a href={REPO} target="_blank" rel="noreferrer">
                    <Icon name="github" />
                    github.com/{DEVELOPER.github}
                  </a>
                </li>
              </ul>

              <div className="donation">
                <span className="label">Donation address</span>
                <div className="donation-row">
                  <code>{DONATION_ADDRESS}</code>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => copy(DONATION_ADDRESS, 'ltc')}
                  >
                    {copied === 'ltc' ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ---- Technologies ---------------------------------------- */}
        <section className="shell block">
          <h2>Built with</h2>
          <p className="section-sub">
            Taken from the project's own build files.
          </p>
          <div className="tags">
            {TECHNOLOGIES.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* ---- Closing -------------------------------------------- */}
        <section className="shell">
          <div className="cta">
            <div>
              <h2>Explore the source code.</h2>
              <p>
                Read it, fork it, or tell us what we got wrong. MIT licensed.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-dark" href={REPO} target="_blank" rel="noreferrer">
                <Icon name="github" />
                Open repository
              </a>
              <a className="btn btn-ghost" href={DOWNLOAD_URL}>
                <Icon name="download" />
                Download v{VERSION}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell foot">
        <span className="wordmark">LiteConnect</span>
        <p className="muted">
          Free and open source, under the MIT licence. Not affiliated with the
          Litecoin Foundation.
        </p>
        <nav>
          <a href={RELEASE_URL} target="_blank" rel="noreferrer">
            Releases
          </a>
          <a href={`${REPO}/blob/main/LICENSE`} target="_blank" rel="noreferrer">
            Licence
          </a>
          <a href={REPO} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </footer>
    </>
  )
}
