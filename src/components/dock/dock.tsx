import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  bottom: 0;
`

const Dock: React.FC = () => {
  return <Container>Hello</Container>
}

export { Dock }
