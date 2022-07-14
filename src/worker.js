const { join } = require('path')
const querystring = require('querystring')

const { v1 } = require('uuid')
const puppetteer = require('puppeteer')

const BASE_URL = 'https://erickwendel.github.io/business-card-template/index.html'

function createQueryStringFromObject (data) {
  const separator = null
  const keyDeLimiter = null
  const options = {
    encodeURIComponent: querystring.unescape
  }
  const qs = querystring.stringify(
    data,
    separator,
    keyDeLimiter,
    options
  )

  return qs
}

async function render({ finalURI, name }) {
  const output = join(__dirname, `./../output/${name}-${v1()}.pdf`)
  const browser = await puppetteer.launch({
    //headless: false,
  })
  const page = await browser.newPage()
  await page.goto(finalURI, { waitUntil: 'networkidle2' })

  await page.pdf({
    path: output,
    format: 'A4',
    landscape: true,
    printBackground: true,
  })

  await browser.close()
}

async function main (message) {
  const pid = process.pid
  console.log(`${pid} got a message!`, message.name)
  const qs = createQueryStringFromObject(message)
  const finalURI = `${BASE_URL}?${qs}`


  try {
    render({ finalURI, name: message.name })
    process.send(`${pid} has finished!`)
  } catch(error) {
    process.send(`${pid} has broken! ${error.stack}`)
  }
}

process.once('message', main)