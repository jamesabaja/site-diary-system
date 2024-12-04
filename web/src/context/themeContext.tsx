import { ThemeProvider } from 'styled-components'

import { buildPassTheme } from '../styles/theme'

type Props = {
  children?: React.ReactNode
}

export const BuildPassThemeProvider: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={buildPassTheme}>{children}</ThemeProvider>
}
