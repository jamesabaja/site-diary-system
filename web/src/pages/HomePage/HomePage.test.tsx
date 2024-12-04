import { render } from '@redwoodjs/testing/web'

import { BuildPassThemeProvider } from 'src/context/themeContext'

import HomePage from './HomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <BuildPassThemeProvider>
          <HomePage />
        </BuildPassThemeProvider>
      )
    }).not.toThrow()
  })
})
