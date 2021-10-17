const fs = require('fs')
const { component, barrel, styles } = require('./component_templates.js')

// grab component name from terminal argument
const [type] = process.argv.slice(2)
const [relPath] = process.argv.slice(3)
const [name] = process.argv.slice(4)
const [props] = process.argv.slice(5)

if (!name) throw new Error('You must include a component name.')

const fragments = relPath !== '.' ? `/${relPath}/fragments` : ''

const dir = `./src/${type}${fragments}/${name}/`

// throw an error if the file already exists
if (fs.existsSync(dir))
  throw new Error('A component with that name already exists.')

// create the folder
fs.mkdirSync(dir)

function writeFileErrorHandler(err) {
  if (err) throw err
}

// component.tsx
fs.writeFile(
  `${dir}/${name}.tsx`,
  component(name, props),
  writeFileErrorHandler
)
// styles.ts
fs.writeFile(`${dir}/styles.ts`, styles(name), writeFileErrorHandler)
// storybook.jsx
// fs.writeFile(`${dir}/${name}.stories.jsx`, story(name), writeFileErrorHandler);
// // test.tsx
// fs.writeFile(`${dir}/${name}.test.tsx`, test(name), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler)

// insert new component into 'components/index.ts file
fs.readFile(`./src/${type}${fragments}/index.ts`, 'utf8', function (err, data) {
  if (err) throw err

  // grab all components and combine them with new component
  const currentComponents = data.match(/(?<=import )(.*?)(?= from)/g) || null

  let newComponents = [name]
  if (currentComponents) {
    newComponents = [name, ...currentComponents].sort()
  }

  // create the import and export statements
  const importStatements = newComponents
    .map((importName) => `import ${importName} from './${importName}'\n`)
    .join('')
  const exportStatements = `export {\n${newComponents
    .map((component) => `  ${component},\n`)
    .join('')}}\n`

  const fileContent = `${importStatements}\n${exportStatements}`

  fs.writeFile(
    `./src/${type}${fragments}/index.ts`,
    fileContent,
    writeFileErrorHandler
  )

  console.log(`${name} has been created.`)
})
