const KEY = 'spc-map-consent'

// localStorage can throw (private mode, blocked storage); treat that as "no consent".
export function hasMapConsent(): boolean {
  try {
    return localStorage.getItem(KEY) === 'granted'
  } catch {
    return false
  }
}

export function grantMapConsent(): void {
  try {
    localStorage.setItem(KEY, 'granted')
  } catch {}
}

export function revokeMapConsent(): void {
  try {
    localStorage.removeItem(KEY)
  } catch {}
}
