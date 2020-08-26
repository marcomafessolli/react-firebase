import * as React from 'react'

import { Logout } from '../components/logout/logout'
import { Dock } from '../components/dock/dock'

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <Logout />
      <Dock />
    </>
  )
}

export { Home }
