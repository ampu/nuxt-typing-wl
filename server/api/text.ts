import {textClient} from '../utils/text-client'

export default defineEventHandler(async (event) => {
  const text = await textClient.getQuote()
  setHeaders(event, {
    [`Content-Type`]: `text/plain; charset=utf-8`,
    [`Access-Control-Allow-Origin`]: `https://ampu.github.io`,
  })
  return text
})


