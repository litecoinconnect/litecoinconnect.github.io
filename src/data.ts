/**
 * Every fact this site states, in one place.
 *
 * A download page for a wallet makes claims people act on: a version, a hash,
 * a certificate fingerprint, an address to send money to. Scattering those
 * through JSX is how one of them quietly goes stale after a release and starts
 * lying. They live here, and each carries where it came from.
 */

export const REPO = 'https://github.com/litecoinconnect/liteconnect'
export const RELEASE_TAG = 'v1.0.0'
export const VERSION = '1.0.0'

export const DOWNLOAD_URL =
  `${REPO}/releases/download/${RELEASE_TAG}/liteconnect-${VERSION}.apk`
export const RELEASE_URL = `${REPO}/releases/tag/${RELEASE_TAG}`

/** From `sha256sum` on the APK attached to the release. */
export const APK_SHA256 =
  '0efef7b532b32983a9c47830249e7764cb06b022ff1f7d48870cc9d749572400'

export const APK_SIZE = '32.6 MB'

/** From `apksigner verify --print-certs` on that same APK. */
export const CERT_SHA256 =
  'FD:73:AF:66:53:D5:46:0E:13:4B:A9:95:80:B0:5A:74:62:C6:9F:5D:B5:97:46:BB:3F:4E:E1:D8:F4:BD:F4:13'
export const CERT_SHA1 =
  'E4:5A:81:D8:28:53:2F:47:5C:3B:B3:1A:48:95:3B:D0:37:83:C5:1A'

export const DEVELOPER = {
  name: 'Mauricio Erramuspe',
  role: 'Lead Developer',
  x: 'mderramus',
  github: 'litecoinconnect',
}

/**
 * Checked before it was published: bech32 checksum valid, hrp "ltc" so mainnet,
 * witness v0, 20-byte program (P2WPKH).
 */
export const DONATION_ADDRESS = 'ltc1qpclak24j5rh8c2592y5j7y69q6lj8ap8xata3v'

export const MIN_ANDROID = 'Android 8.0'

/** Named from the app's own build files, not from a marketing list. */
export const TECHNOLOGIES = [
  'Kotlin',
  'Jetpack Compose',
  'Material 3',
  'Electrum protocol',
  'Blockbook',
  'secp256k1',
  'BIP-32/39',
  'BIP-44/49/84',
  'bech32',
  'Argon2id + AES-256-GCM',
  'Android Keystore',
  'Biometric Auth',
]

export const FEATURES = [
  {
    icon: 'send',
    title: 'Send & receive',
    body: 'Fee selection on the way out, QR on the way in, and a scanner that reads any Litecoin address.',
  },
  {
    icon: 'chart',
    title: 'Analytics',
    body: 'Every movement valued at the market price of the day it happened, with the amount-weighted average of what arrived.',
  },
  {
    icon: 'key',
    title: 'Keys stay on device',
    body: 'The phrase is generated here and sealed under an Android Keystore master key. It is never uploaded in readable form.',
  },
  {
    icon: 'layers',
    title: 'Three address types',
    body: 'Native SegWit, wrapped SegWit and legacy, all derived from one recovery phrase, switchable per account.',
  },
]
