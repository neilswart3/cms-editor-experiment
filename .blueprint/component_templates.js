// component.tsx
exports.component = (name, props) => `import React from 'react'
import Styled from './styles'
${
  props
    ? `
interface Props {

}
`
    : ''
}
const ${name}: React.FC${props ? `<Props>` : ''} = (${
  props ? `props` : ''
}) => {
  return (
    <Styled.${name}>${name} component</Styled.${name}>
  );
};

export default ${name}
`

// component.stories.jsx
exports.story = (name) => `import React from 'react'
import ${name} from './${name}.tsx'

export default {
  title: '${name}',
  component: ${name},
}

export const Default = () => <${name} />
`

// component.test.tsx
exports.test = (name) => `import React from 'react'
import { render } from '@testing-library/react'
import ${name} from './${name}'

const props = {

}

describe('${name} Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<${name} {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

`

// styles.ts
exports.styles = (name) => `import styled from 'styled-components'

const ${name} = styled.div\`
  display: block;
\`

const Styled = { ${name} }

export default Styled
`

// index.ts
exports.barrel = (name) => `import ${name} from './${name}'

export default ${name}
`
