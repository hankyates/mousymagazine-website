const {readdirSync, readFileSync} = require('fs')
const {join} = require('path')

exports.createPages = async ({ actions: { createPage } }) => {
  const dir = `${__dirname}/src/page-data`
  const pages = readdirSync(`${__dirname}/src/page-data`)

  pages.forEach(p => {
    const pageJson = readFileSync(join(dir, p), {encoding: 'utf-8'})
    const page = JSON.parse(pageJson)
    createPage({
      path: page.path,
      component: require.resolve("./src/pages/index.js"),
      context: {page},
    })
  })
}
