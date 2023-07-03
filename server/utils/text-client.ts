import axios, {AxiosInstance} from 'axios'

const BASE_URL = `https://api.forismatic.com/api/1.0/`
const REQUEST_TIMEOUT = 5000

type GetQuoteJSON = {
  quoteText: string
  quoteAuthor: string
  senderName: string
  senderLink: string
  quoteLink: string
}

const importQuoteFromGetQuoteResponse = (response: { data: GetQuoteJSON }) =>
  response.data?.quoteText
    ?.replace(/—/g, `-`)
    ?.replace(/[«»]/g, `"`)
    ?.replace(/ё/g, `е`)
    .trim()

class TextClient {
  _client: AxiosInstance

  constructor() {
    this._client = axios.create({
      timeout: REQUEST_TIMEOUT,
      baseURL: BASE_URL,
    })
  }

  async getQuote(): Promise<string> {
    return this._client
      .get(`/`, {
        params: {
          method: `getQuote`,
          lang: `ru`,
          format: `json`,
        },
      })
      .then(importQuoteFromGetQuoteResponse)
  }
}

export const textClient = new TextClient()
