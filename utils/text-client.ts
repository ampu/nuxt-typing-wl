import axios, {AxiosInstance} from 'axios'

const BASE_URL = `http://api.forismatic.com/api/1.0/`
const REQUEST_TIMEOUT = 5000

export function buildUrl(url: string, query: Record<string, string | number | boolean | undefined>) {
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined) {
      continue
    }
    if (value === null) {
      url += `${/[?]/.test(url) ? `&` : `?`}${encodeURIComponent(key)}`
      continue
    }
    url += `${/[?]/.test(url) ? `&` : `?`}${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  }
  return url
}

class TextClient {
  _client: AxiosInstance

  constructor() {
    this._client = axios.create({
      baseURL: BASE_URL,
      timeout: REQUEST_TIMEOUT,
    })
  }

  async getQuote() {
    const url = buildUrl(`/`, {
      method: `getQuote`,
      lang: `ru`,
      format: `json`,
      key: Number(String(Date.now()).slice(-6)),
    })
    const {data} = await this._client.get(url,)
    return data
  }
}

export const textClient = new TextClient()
