const fs = require('fs')
const path = require('path')

async function main() {
  const pdfPath = path.join(process.cwd(), 'project_docs', 'Eunice Nails Website Documentation.pdf')
  const dataBuffer = fs.readFileSync(pdfPath)

  let PDFParse
  try {
    PDFParse = require('pdf-parse').PDFParse
  } catch (error) {
    console.error('Missing dependency: pdf-parse')
    process.exit(1)
  }

  const parser = new PDFParse({ data: dataBuffer })
  await parser.load()
  const data = await parser.getText()
  console.log('---PAGES---')
  console.log(parser.doc?.numPages || parser.options?.numPages || 'unknown')
  console.log('---TEXT_START---')
  console.log((data?.text || '').slice(0, 30000))
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})